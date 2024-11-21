import { UseFormReturn } from "react-hook-form";

export interface formStepProps {
  methods: UseFormReturn<any>;
}

export interface questionsQuestions {
  question_1_question: string;
  question_2_question: string;
  question_3_question: string;
  question_4_question: string;
}

export interface questionsResponses {
  question_1_response: string;
  question_2_response: string;
  question_3_response: string;
  question_4_response: string;
}

export interface questions extends questionsQuestions, questionsResponses {
  orderId: string;
}