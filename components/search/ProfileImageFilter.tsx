import React from 'react'
//import css module
import searchCSS from './index.module.css'

export interface ProfileImageFilterProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function ProfileImageFilterProps({
	onChange,
}: ProfileImageFilterProps) {
	return (
		<div className={searchCSS.imageFilterContainer}>
			<input
				className={searchCSS.imageFilterInput}
				type="checkbox"
				onChange={onChange}
			/>

			<div className={searchCSS.imageFilterText}>
				Hide people missing a profile image
			</div>
		</div>
	)
}
