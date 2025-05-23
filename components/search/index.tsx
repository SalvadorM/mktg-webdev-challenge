/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

//Import the new components to break down the code a bit
import SearchInputButton from './SearchButton'

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
			<SearchInputButton onChange={onInputChange} />

			<div>
				<input type="checkbox" onChange={onProfileChange} />
				<div>Hide people missing a profile image</div>
			</div>
		</>
	)
}
