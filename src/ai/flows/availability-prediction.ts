'use server';

/**
 * @fileOverview An AI agent that predicts the likelihood of a clinic having Wegovy or Mounjaro in stock.
 *
 * - predictAvailability - A function that handles the availability prediction process.
 * - PredictAvailabilityInput - The input type for the predictAvailability function.
 * - PredictAvailabilityOutput - The return type for the predictAvailability function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PredictAvailabilityInputSchema = z.object({
  clinicName: z.string().describe('The name of the clinic.'),
  itemName: z.string().describe('The name of the item (Wegovy or Mounjaro).'),
  historicalData: z.string().describe('Historical availability data for the clinic and item, including dates and reported statuses (e.g., "2024-07-22: available", "2024-07-15: unavailable").'),
  userReports: z.string().describe('Recent user reports about the clinic and item availability, including verification status and vote counts (e.g., "Report from 2 days ago (community-verified, 8 votes): available for 350,000 KRW").'),
  regionalTrends: z.string().describe('Current regional trends affecting availability (e.g., "Overall supply in the region is tight.").'),
});
export type PredictAvailabilityInput = z.infer<typeof PredictAvailabilityInputSchema>;

const PredictAvailabilityOutputSchema = z.object({
  probabilityScore: z.number().min(0).max(1).describe('The predicted probability (0 to 1) of the clinic having the item in stock.'),
  reasoning: z.string().describe('A brief, one-sentence explanation for the prediction, written in Korean.'),
});
export type PredictAvailabilityOutput = z.infer<typeof PredictAvailabilityOutputSchema>;

export async function predictAvailability(input: PredictAvailabilityInput): Promise<PredictAvailabilityOutput> {
  return predictAvailabilityFlow(input);
}

const prompt = ai.definePrompt({
  name: 'predictAvailabilityPrompt',
  input: {schema: PredictAvailabilityInputSchema},
  output: {schema: PredictAvailabilityOutputSchema},
  prompt: `You are an AI assistant specializing in predicting the availability of medications at specific clinics based on crowdsourced data. Your response must be in Korean.

  Analyze the following information to provide a probability score (from 0.0 to 1.0) of stock availability. Also, provide a brief, one-sentence explanation for your reasoning in Korean.

  - Clinic: {{{clinicName}}}
  - Medication: {{{itemName}}}
  - Historical Data: {{{historicalData}}}
  - Recent User Reports: {{{userReports}}}
  - Regional Trends: {{{regionalTrends}}}

  **Reasoning Guide:**
  - A recent 'available' report from a verified source (admin or community) with positive votes is a strong positive signal.
  - A recent 'unavailable' report is a strong negative signal.
  - Older data is less reliable than recent data. A report from today is much more valuable than one from 3 weeks ago.
  - High vote counts on a report increase its credibility.
  - If there is no recent data (e.g., older than 2-3 weeks) or only unverified reports, the prediction is uncertain. In such cases, the score should be around 0.5, and the reasoning should mention the lack of recent, reliable data.
  - If all data points are negative (e.g., 'unavailable', 'out of stock'), the score should be very low (e.g., < 0.1).
  - If recent, verified data is positive, the score should be high (e.g., > 0.8).
  
  Provide only the JSON output.
`,
});

const predictAvailabilityFlow = ai.defineFlow(
  {
    name: 'predictAvailabilityFlow',
    inputSchema: PredictAvailabilityInputSchema,
    outputSchema: PredictAvailabilityOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
