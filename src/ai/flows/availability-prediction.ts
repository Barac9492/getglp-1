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
  historicalData: z.string().describe('Historical availability data for the clinic and item.'),
  userReports: z.string().describe('Recent user reports about the clinic and item availability.'),
  regionalTrends: z.string().describe('Current regional trends affecting availability.'),
});
export type PredictAvailabilityInput = z.infer<typeof PredictAvailabilityInputSchema>;

const PredictAvailabilityOutputSchema = z.object({
  probabilityScore: z.number().describe('The predicted probability (0 to 1) of the clinic having the item in stock.'),
  reasoning: z.string().describe('The AI explanation for the prediction.'),
});
export type PredictAvailabilityOutput = z.infer<typeof PredictAvailabilityOutputSchema>;

export async function predictAvailability(input: PredictAvailabilityInput): Promise<PredictAvailabilityOutput> {
  return predictAvailabilityFlow(input);
}

const prompt = ai.definePrompt({
  name: 'predictAvailabilityPrompt',
  input: {schema: PredictAvailabilityInputSchema},
  output: {schema: PredictAvailabilityOutputSchema},
  prompt: `You are an AI assistant specializing in predicting the availability of medications at specific clinics.

  Based on the following information, provide a probability score (0 to 1) indicating the likelihood of the specified clinic having the specified medication in stock. Also, provide a brief explanation of your reasoning.

  Clinic Name: {{{clinicName}}}
  Medication: {{{itemName}}}
  Historical Data: {{{historicalData}}}
  User Reports: {{{userReports}}}
  Regional Trends: {{{regionalTrends}}}

  Consider all factors and provide a well-reasoned prediction.
  Ensure that probabilityScore is between 0 and 1. If there is no historical data, user reports, or regional trends available, return a probability score of 0.5 and indicate that the prediction is uncertain due to lack of information.
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
