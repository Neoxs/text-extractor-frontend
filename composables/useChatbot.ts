import { reactive, ref } from 'vue'
import type { ChatbotResponse, ChatbotState } from '~/types'

export function useChatbot() {
  const state = reactive<ChatbotState>({
    loading: false,
    resolved: false,
    error: false,
  })

  const response = ref<ChatbotResponse | null>(null)

  const fetchApiResponse = async (
    userInput: string
  ): Promise<ChatbotResponse> => {
    try {
      const res = await fetch('http://localhost:5001/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: userInput, // Send user input to the Flask API
        }),
      })

      if (!res.ok) {
        throw new Error('API request failed')
      }

      const data = (await res.json()) as ChatbotResponse
      return data
    } catch (error) {
      state.error = true
      console.error('API error:', error)
      throw error
    }
  }

  async function submitQuery(userInput: string) {
    resetChat()
    try {
      state.loading = true
      response.value = await fetchApiResponse(userInput)
    } catch (error) {
      console.error('Error fetching response:', error)
      response.value = null
      state.error = true
    } finally {
      state.loading = false
      state.resolved = true
    }
  }

  function resetChat() {
    state.loading = false
    state.resolved = false
    state.error = false
    response.value = null
  }

  return {
    state,
    response,
    submitQuery,
    resetChat,
  }
}
