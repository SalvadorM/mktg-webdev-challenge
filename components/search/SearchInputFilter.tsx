import React from 'react'
import Image from 'next/image'

//import image assets
import searchicon from './assets/searchicon.svg'

//import css module
import searchCSS from './index.module.css'

export interface SearchInputProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SearchInputFilter({ onChange }: SearchInputProps) {
	return (
		<div className={searchCSS.searchBarContainer}>
			<Image src={searchicon} alt="Search Icon" width={20} height={20} />

			<input
				className={searchCSS.searchInput}
				type="text"
				placeholder="Search people by name"
				onChange={onChange}
			/>
		</div>
	)
}
