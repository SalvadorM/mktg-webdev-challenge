/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

//Import the new components to break down the code a bit
import SearchInputFilter from './SearchInputFilter'
import ProfileImageFilter from './ProfileImageFilter'

export interface SearchProps {
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	onProfileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Search({
	onInputChange,
	onProfileChange,
}: SearchProps) {
	return (
		<>
			<SearchInputFilter onChange={onInputChange} />

			<ProfileImageFilter onChange={onProfileChange} />
		</>
	)
}
