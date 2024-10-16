"use client";

import { useChat } from "ai/react";
import { ChatInput, ChatMessages } from "./ui/chat";

export default function ChatSection() {
	const { messages, input, isLoading, handleSubmit, handleInputChange, reload, stop } = useChat();

	return (
		<div className="space-y-4 max-w-5xl h-[650px] w-full">
			<ChatMessages messages={messages} isLoading={isLoading} reload={reload} stop={stop} />
			<ChatInput
				input={input}
				handleSubmit={handleSubmit}
				handleInputChange={handleInputChange}
				isLoading={isLoading}
				multiModal
			/>
		</div>
	);
}
