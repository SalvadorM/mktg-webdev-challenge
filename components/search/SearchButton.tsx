import React from 'react'
import Image from 'next/image'

//import image assets
import searchicon from './assets/searchicon.svg'

export interface SearchInputProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SearchInputButton({ onChange }: SearchInputProps) {
	return (
		<div>
			<Image src={searchicon} alt="Search Icon" width={20} height={20} />
			<input
				type="text"
				placeholder="Search people by name"
				onChange={onChange}
			/>
		</div>
	)
}
