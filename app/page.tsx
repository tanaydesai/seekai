import ChatSection from "./components/chat-section";
import { Paperclip, SparklesIcon } from "lucide-react";
import p1 from "@/public/images/p1.png"
import p2 from "@/public/images/p2.png"
import p3 from "@/public/images/p3.png"
import p4 from "@/public/images/p4.png"
import p5 from "@/public/images/p5.png"
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex w-full h-full absolute items-start gap-5 px-5 pt-10 bg-gradient-to-bl overflow-x-hidden from-slate-300 to-blue-50">
			<h1 className="font-bold text-4xl absolute top-5 w-full text-center">Seek AI</h1>
			<div className="w-1/2 mt-10"><ChatSection /></div>
			<div className="w-1/2  mt-10 h-[685px] overflow-auto">
				<div className="bg-white/80 p-3 text-[16px] rounded-lg flex items-center w-full gap-2 h-[60px]"><Paperclip size={15}/>attention-is-all-you-need-models.pdf</div>
				<div className="mt-5 bg-white/80 p-3 rounded-lg">
					<div className="text-left px-2 w-full flex gap-2 items-center text-[20px]"><SparklesIcon size={20}/>Similar Papers</div>
					<div className="mt-2 text-[16px] overflow-auto  flex items-center w-full gap-4">
						<div className="relative overflow-auto shrink-0">
							<Image src={p1} alt="image" className="w-[200px] h-auto rounded-md"/>
							<div className="bg-slate-200 mt-3 px-2 rounded-md h-auto whitespace-nowrap text-center overflow-auto truncate text-[13px] max-w-[150px] mx-auto">ai-models-are-cool</div>
						</div>

						<div className="relative overflow-auto shrink-0">
							<Image src={p2} alt="image" className="w-[200px] h-auto rounded-md"/>
							<div className="bg-slate-200 mt-3 px-2 rounded-md h-auto whitespace-nowrap text-center overflow-auto truncate text-[13px] max-w-[150px] mx-auto">ai-models-are-cool</div>
						</div>

						<div className="relative overflow-auto shrink-0">
							<Image src={p3} alt="image" className="w-[200px] h-auto rounded-md"/>
							<div className="bg-slate-200 mt-3 px-2 rounded-md h-auto whitespace-nowrap text-center overflow-auto truncate text-[13px] max-w-[150px] mx-auto">ai-models-are-cool</div>
						</div>

						<div className="relative overflow-auto shrink-0">
							<Image src={p4} alt="image" className="w-[200px] h-auto rounded-md"/>
							<div className="bg-slate-200 mt-3 px-2 rounded-md h-auto whitespace-nowrap text-center overflow-auto truncate text-[13px] max-w-[150px] mx-auto">ai-models-are-cool</div>
						</div>

						<div className="relative overflow-auto shrink-0">
							<Image src={p5} alt="image" className="w-[200px] h-auto rounded-md"/>
							<div className="bg-slate-200 mt-3 px-2 rounded-md h-auto whitespace-nowrap text-center overflow-auto truncate text-[13px] max-w-[150px] mx-auto">ai-models-are-cool</div>
						</div>
					</div>
				</div>

				<div className="mt-5 bg-white/80 p-3 rounded-lg">
					<div className="text-left px-2 w-full flex gap-2 items-center text-[20px]"><SparklesIcon size={20}/>Citations</div>
					<div className="flex w-full gap-3 mt-3 items-center overflow-auto">
						<div className="bg-slate-200 px-2 text-[16px] rounded-lg flex items-center whitespace-nowrap  w-fit gap-2 h-[40px]"><Paperclip size={15}/>Attla et al. (2021)</div>
						<div className="bg-slate-200 px-2 text-[16px] rounded-lg flex items-center whitespace-nowrap  w-fit gap-2 h-[40px]"><Paperclip size={15}/>Attla et al. (2021)</div>
						<div className="bg-slate-200 px-2 text-[16px] rounded-lg flex items-center whitespace-nowrap  w-fit gap-2 h-[40px]"><Paperclip size={15}/>Attla et al. (2021)</div>
						<div className="bg-slate-200 px-2 text-[16px] rounded-lg flex items-center whitespace-nowrap  w-fit gap-2 h-[40px]"><Paperclip size={15}/>Attla et al. (2021)</div>

					</div>
				</div>

				<div className="mt-5 bg-white/80 p-3 rounded-lg">
					<div className="text-left px-2 w-full flex gap-2 items-center text-[20px]"><SparklesIcon size={20}/>Quick Overview</div>
					<div className="mt-3 text-[14px]">
					Transformative Technology: AI is a leading technology of the 21st century, impacting sectors like healthcare, finance, and transportation.
<br /><br />Research Methodology: The study combines literature reviews, case studies, and expert interviews to assess AI's applications and implications.
<br /><br />Sectoral Applications: Key uses of AI include diagnostic tools in healthcare, automated trading in finance, and autonomous vehicles in transportation.
<br /><br />Ethical Challenges: The adoption of AI raises significant ethical concerns, including privacy issues, job displacement, and the need for unbiased systems.
<br /><br />Future Direction: Ongoing research is essential to understand AI's long-term societal implications and establish frameworks for its ethical use.
					</div>
				</div>
			</div>
	</main>
	);
}
