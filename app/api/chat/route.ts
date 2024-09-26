import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_OPENAI_API_KEY,
});

export const runtime = "edge";

const createRequestMessages = async (req: Request) => {
  const { messages, data } = await req.json();
  if (!data?.imageUrl) return messages;

  const initialMessages = messages.slice(0, -1);
  const currentMessage = messages[messages.length - 1];
  return [
    ...initialMessages,
    {
      ...currentMessage,
      content: [
        { type: "text", text: currentMessage.content },
        {
          type: "image_url",
          image_url: data.imageUrl,
        },
      ],
    },
  ];
};

export async function POST(req: Request) {
  const inputMessages = await createRequestMessages(req);
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    stream: true,
    messages: [...inputMessages, {
      role: "user",
      content: `The Impact of Artificial Intelligence on Modern Society
John Doe, Jane Smith

Department of Computer Science, Example University

Abstract
This paper explores the profound impact of Artificial Intelligence (AI) on various aspects of modern society. We analyze the current state of AI technology, its applications across different sectors, and the potential future developments. Our research highlights both the benefits and challenges associated with the widespread adoption of AI, including ethical considerations and socioeconomic implications.

1. Introduction
Artificial Intelligence has emerged as one of the most transformative technologies of the 21st century. Its ability to process vast amounts of data, recognize patterns, and make decisions has led to applications in fields ranging from healthcare to finance, transportation to entertainment.

This paper aims to provide a comprehensive overview of AI's impact on modern society, examining both its current applications and potential future developments. We will explore the technical foundations of AI, its real-world implementations, and the broader implications for individuals, businesses, and governments.

2. Methodology
Our research methodology combines a thorough literature review with case studies of AI applications in various sectors. We analyzed peer-reviewed articles, industry reports, and conducted interviews with AI experts to gather diverse perspectives on the subject.

3. Results and Discussion
Our findings indicate that AI has had a significant impact across multiple sectors:

Healthcare: AI-powered diagnostic tools and personalized treatment plans
Finance: Automated trading systems and fraud detection algorithms
Transportation: Development of autonomous vehicles and traffic optimization
Education: Personalized learning experiences and automated grading systems
However, the adoption of AI also raises important ethical considerations, including privacy concerns, potential job displacement, and the need for transparent and unbiased AI systems.

4. Conclusion
AI continues to reshape modern society in profound ways. While its benefits are numerous, addressing the challenges associated with its implementation is crucial for ensuring that AI technologies are developed and used responsibly. Further research is needed to fully understand the long-term implications of AI on society and to develop frameworks for its ethical use.

References
Smith, J. (2022). "The Evolution of Artificial Intelligence." AI Journal, 15(2), 112-128.
Brown, A., et al. (2023). "Ethical Considerations in AI Development." Tech Ethics Review, 8(4), 78-95.
Lee, K. (2021). "AI in Healthcare: Opportunities and Challenges." Medical AI, 10(1), 45-60.`,
    }],
    max_tokens: 2000,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
