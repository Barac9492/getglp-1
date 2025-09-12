'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { clinics, items } from '@/lib/mock-data';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { saveReport } from '@/app/actions/report';

const reportFormSchema = z.object({
  clinicId: z.string({ required_error: '클리닉을 선택해주세요.' }),
  item: z.enum(['wegovy', 'mounjaro'], { required_error: '제품을 선택해주세요.' }),
  availability: z.enum(['available', 'unavailable'], { required_error: '가용성을 선택해주세요.' }),
  priceKRW: z.coerce.number().optional(),
  sourceType: z.string({ required_error: '출처를 선택해주세요.' }),
  note: z.string().max(500, '메모는 500자 이내로 작성해주세요.').optional(),
  evidenceImage: z.any().optional(),
});

export type ReportFormValues = z.infer<typeof reportFormSchema>;

export default function ReportForm() {
    const { toast } = useToast();
    const router = useRouter();

  const form = useForm<ReportFormValues>({
    resolver: zodResolver(reportFormSchema),
    defaultValues: {
        note: '',
        priceKRW: undefined
    }
  });

  async function onSubmit(data: ReportFormValues) {
    // This is where you would handle the file upload if needed.
    // For now, we'll pass the data to the server action.
    try {
        await saveReport(data);
        toast({
          title: '✅ 제보가 등록되었습니다',
          description: '검증 후 지도에 반영됩니다. 감사합니다!',
        });
        router.push('/');
    } catch (error) {
        toast({
            variant: 'destructive',
            title: '❌ 오류가 발생했습니다',
            description: '제보를 등록하는 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
        });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="clinicId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>클리닉 선택</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="검색하거나 목록에서 클리닉을 선택하세요" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {clinics.map((clinic) => (
                    <SelectItem key={clinic.id} value={clinic.id}>
                      {clinic.name} ({clinic.district})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="item"
          render={({ field }) => (
            <FormItem>
              <FormLabel>제품</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-4"
                >
                  {items.map(item => (
                    <FormItem key={item.id} className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                            <RadioGroupItem value={item.id} />
                        </FormControl>
                        <FormLabel className="font-normal">{item.displayNameKo}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="availability"
          render={({ field }) => (
            <FormItem>
              <FormLabel>재고 상태</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-4"
                >
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl><RadioGroupItem value="available" /></FormControl>
                    <FormLabel className="font-normal">재고 있음</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl><RadioGroupItem value="unavailable" /></FormControl>
                    <FormLabel className="font-normal">재고 없음</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="priceKRW"
          render={({ field }) => (
            <FormItem>
              <FormLabel>가격 (선택 사항)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="예: 350000" {...field} />
              </FormControl>
              <FormDescription>월 처방 기준, 숫자만 입력해주세요 (단위: 원)</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="sourceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>정보 출처</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger><SelectValue placeholder="어떻게 알게 되셨나요?" /></SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="phone">전화 문의</SelectItem>
                  <SelectItem value="visit">직접 방문</SelectItem>
                  <SelectItem value="sms">문자/알림톡</SelectItem>
                  <SelectItem value="kakao">카카오톡 채널</SelectItem>
                  <SelectItem value="other">기타</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem>
              <FormLabel>메모 (선택 사항)</FormLabel>
              <FormControl>
                <Textarea placeholder="추가 정보를 입력해주세요 (예: '2주치만 처방 가능')" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
            control={form.control}
            name="evidenceImage"
            render={({ field }) => (
            <FormItem>
                <FormLabel>증빙 자료 (선택 사항)</FormLabel>
                <FormControl>
                <Input type="file" accept="image/*" onChange={(e) => field.onChange(e.target.files)} />
                </FormControl>
                <FormDescription>
                가격이나 재고 정보가 담긴 영수증, 문자 메시지 스크린샷 등을 첨부하면 정보의 신뢰도가 올라갑니다.
                </FormDescription>
                <FormMessage />
            </FormItem>
            )}
        />


        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? '제출 중...' : '제출하기'}
        </Button>
      </form>
    </Form>
  );
}
