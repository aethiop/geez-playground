<template>
	<div class="w-full h-screen bg-gray-200 items-center px-14 pt-4">
		<div class="flex flex-row justify-between">
			<div class="flex flex-row items-center">
				<svg
					class="w-10 h-10 "
					viewBox="0 0 50 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect width="50" height="50" rx="9.09091" fill="#FCD34C" />
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M16.7377 15.7377V34.2623H23.2951V25.082C23.2951 23.4975 24.5795 22.2131 26.1639 22.2131C27.7484 22.2131 29.0328 23.4975 29.0328 25.082V35.3279C29.0328 37.9082 26.941 40 24.3607 40H15.6721C13.0918 40 11 37.9082 11 35.3279V14.6721C11 12.0918 13.0918 10 15.6721 10H36.3279C38.9082 10 41 12.0918 41 14.6721V25.082C41 26.6664 39.7156 27.9508 38.1311 27.9508C36.5467 27.9508 35.2623 26.6664 35.2623 25.082V15.7377H16.7377Z"
						fill="#1F2937"
					/>
				</svg>

				<h1
					class="pl-2 text-2xl font-black text-gray-800 tracking-widest leading-relaxed"
				>
					Ge'ez
				</h1>
			</div>
			<div class="flex items-center">
				<button
					class="inline-flex items-center font-bold text-gray-700 px-4 py-2 focus:outline-none rounded-xl bg-yellow-300  hover:shadow-lg transition duration-150 ease-in-out transform hover:scale-105"
				>
					Sign In
				</button>
			</div>
		</div>
		<div class="flex my-9">
			<div class="flex-1 flex-col justify-center pt-24 text-center">
				<h1
					class="text-gray-800 text-4xl font-black text-dark-indigo tracking-widest leading-relaxed"
				>
					Ge'ez
				</h1>
				<p class="text-gray-800 font-semibold text-light-indigo">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Itaque quibusdam, quo cumque nisi nesciunt voluptatum magni
					a labore rerum inventore molestiae? Recusandae cum sapiente
					officiis dolores aliquam necessitatibus suscipit aspernatur?
				</p>
				<div>
					<input
						v-model="username"
						placeholder="Name"
						class="border border-transparent focus:outline-none bg-white focus:ring-2 focus:ring-green-400 focus:border-transparent rounded-lg mt-4 px-4 py-2 shadow-md"
					/>
					<button
						@click="createAccount"
						class="ml-3 font-black font-mono text-gray-700 px-4 py-2 rounded-lg bg-yellow-300 focus:outline-none shadow-md focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 hover:shadow-lg transition duration-150 ease-in-out transform hover:scale-105"
					>
						Try Now
					</button>
				</div>
			</div>
			<div class="flex-1">
				<div class="flex justify-center">
					<img
						class="h-80 pl-20"
						src="./assets/illustration.svg"
						alt="illustration"
					/>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup></script>
