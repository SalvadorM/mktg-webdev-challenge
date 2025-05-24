import React from 'react'
//import css module

import searchCSS from '../search/index.module.css'
import { PersonRecord } from 'types'
import Profile from './index'

export interface ProfileListingProps {
	peopleFiltered: PersonRecord[]
}

export default function ProfileListing({
	peopleFiltered,
}: ProfileListingProps) {
	return (
		<div className={searchCSS.resultsContainerWrapper}>
			{peopleFiltered.length === 0 && (
				<div className={searchCSS.noResults}>
					<span>No results found.</span>
				</div>
			)}

			{peopleFiltered.map((person: PersonRecord) => (
				<li key={person.id} className={searchCSS.resultContainerWrapper}>
					<Profile
						imgUrl={person.avatar?.url}
						name={person.name}
						title={person.title}
						department={person.department.name}
					/>
				</li>
			))}
		</div>
	)
}
