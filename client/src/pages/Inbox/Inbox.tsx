import { Layout } from "@/components";
import { MockMessages } from "@/mocks";

function Inbox() {
	return (
		<Layout>
			<div className="flex h-full overflow-hidden bg-gray-50">

				{/* 1. Thread List (Left Pane) */}
				<aside className="w-full md:w-80 border-r border-gray-200 bg-white flex flex-col">
					<div className="p-4 border-b border-gray-200 flex justify-between items-center">
						<h2 className="text-xl font-semibold text-gray-800">Inbox</h2>
					</div>

					{/* Scrollable List */}
					<div className="flex-1 overflow-y-auto">
						{MockMessages.map((message) => (
							<div key={message.id} className="p-4 border-b border-gray-100 hover:bg-blue-50 cursor-pointer transition">
								<div className="flex justify-between mb-1">
									<span className="font-bold text-sm text-gray-900">{message.sender}</span>
									<span className="text-xs text-gray-500">10:45 AM</span>
								</div>
								<p className="text-sm text-gray-700 font-medium truncate">{message.title}</p>
								<p className="text-xs text-gray-500 truncate">{message.message}</p>
							</div>
						))}
					</div>
				</aside>

				{/* 2. Message View (Right Pane) */}
				<main className="hidden md:flex flex-1 flex-col bg-white">
					{/* Message Header */}
					<div className="p-4 border-b border-gray-200 flex items-center justify-between">
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">J</div>
							<div>
								<h3 className="font-semibold">John Doe</h3>
							</div>
						</div>
					</div>

					{/* Message Content */}
					<div className="flex-1 p-6 overflow-y-auto">
						<h2 className="text-2xl font-bold mb-4">Project Update: Design Phase</h2>
						<p className="text-gray-700 leading-relaxed">
							Hi team, <br /><br />
							I've attached the latest mockups for the new dashboard. Please let me know if the custom popup components meet the requirements we discussed yesterday.
						</p>
					</div>

					{/* Reply Area */}

				</main>
			</div>		</Layout>
	);
}

export default Inbox;
