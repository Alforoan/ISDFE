export const deleteMember = (e, cell, setMembers) => {
	e.stopPropagation();
	// Using the id api post call needs to be made
	const memberId = cell.row.original.id;

	// For now we directly edit the local array
	setMembers(prevMembers =>
		prevMembers.filter(member => member.id !== memberId),
	);
};

export const editMember = (e, cell, setMembers, editMemberData) => {
	e.stopPropagation();

	// Using the id api post call needs to be made
	const memberId = cell.row.original.id;

	// For now we directly edit the local array
};
