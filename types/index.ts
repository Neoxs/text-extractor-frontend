export interface ChatbotResponse {
  who: string
  when: string
  where: string
}

export interface ChatbotState {
  loading: boolean
  resolved: boolean
  error: boolean
}
