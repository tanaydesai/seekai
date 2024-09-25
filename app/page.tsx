import ChatSection from "./components/chat-section";

export default function Home() {
	return (
		<main className="flex w-full h-full absolute items-start gap-5 px-5 pt-10 bg-gradient-to-bl from-slate-300 to-blue-50">
			<h1 className="font-bold text-4xl absolute top-5 w-full text-center">Seek AI</h1>
			<div className="w-1/2 mt-10"><ChatSection /></div>
			<div className="w-1/2   mt-10 p-10 h-[685px] overflow-auto bg-white">
				<div  className="text-lg relative">
				<title>Research Paper Example</title>
				<article className="font-serif">
				<header className="text-center mb-8">
					<h1 className="text-3xl font-bold mb-2">The Impact of Artificial Intelligence on Modern Society</h1>
					<p className="text-sm mb-2">John Doe, Jane Smith</p>
					<p className="text-sm italic">Department of Computer Science, Example University</p>
				</header>

				<section className="mb-8">
					<h2 className="text-xl font-bold mb-2">Abstract</h2>
					<p className="text-justify">
					This paper explores the profound impact of Artificial Intelligence (AI) on various aspects of modern society. 
					We analyze the current state of AI technology, its applications across different sectors, and the potential 
					future developments. Our research highlights both the benefits and challenges associated with the widespread 
					adoption of AI, including ethical considerations and socioeconomic implications.
					</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-bold mb-2">1. Introduction</h2>
					<p className="text-justify mb-4">
					Artificial Intelligence has emerged as one of the most transformative technologies of the 21st century. 
					Its ability to process vast amounts of data, recognize patterns, and make decisions has led to applications 
					in fields ranging from healthcare to finance, transportation to entertainment.
					</p>
					<p className="text-justify">
					This paper aims to provide a comprehensive overview of AI&apos;s impact on modern society, examining both its 
					current applications and potential future developments. We will explore the technical foundations of AI, 
					its real-world implementations, and the broader implications for individuals, businesses, and governments.
					</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-bold mb-2">2. Methodology</h2>
					<p className="text-justify">
					Our research methodology combines a thorough literature review with case studies of AI applications in 
					various sectors. We analyzed peer-reviewed articles, industry reports, and conducted interviews with AI 
					experts to gather diverse perspectives on the subject.
					</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-bold mb-2">3. Results and Discussion</h2>
					<p className="text-justify mb-4">
					Our findings indicate that AI has had a significant impact across multiple sectors:
					</p>
					<ul className="list-disc list-inside mb-4">
					<li>Healthcare: AI-powered diagnostic tools and personalized treatment plans</li>
					<li>Finance: Automated trading systems and fraud detection algorithms</li>
					<li>Transportation: Development of autonomous vehicles and traffic optimization</li>
					<li>Education: Personalized learning experiences and automated grading systems</li>
					</ul>
					<p className="text-justify">
					However, the adoption of AI also raises important ethical considerations, including privacy concerns, 
					potential job displacement, and the need for transparent and unbiased AI systems.
					</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-bold mb-2">4. Conclusion</h2>
					<p className="text-justify">
					AI continues to reshape modern society in profound ways. While its benefits are numerous, addressing the 
					challenges associated with its implementation is crucial for ensuring that AI technologies are developed 
					and used responsibly. Further research is needed to fully understand the long-term implications of AI on 
					society and to develop frameworks for its ethical use.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold mb-2">References</h2>
					<ul className="list-decimal list-inside text-sm">
					<li>Smith, J. (2022). &quot;The Evolution of Artificial Intelligence.&quot; AI Journal, 15(2), 112-128.</li>
					<li>Brown, A., et al. (2023). &quot;Ethical Considerations in AI Development.&quot; Tech Ethics Review, 8(4), 78-95.</li>
					<li>Lee, K. (2021). &quot;AI in Healthcare: Opportunities and Challenges.&quot; Medical AI, 10(1), 45-60.</li>
					</ul>
				</section>
				</article>
			</div>
			</div>
	</main>
	);
}
