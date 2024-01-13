export const deleteMember = (e, cell, setMembers) => {
	e.stopPropagation();
	// Using the id api post call needs to be made
	const memberId = cell.row.original.id;

	// For now we directly edit the local array
	setMembers(prevMembers =>
		prevMembers.filter(member => member.id !== memberId),
	);
};

export const editMember = (e, table, row) => {
	e.stopPropagation();
	// For now we directly edit the local array
	const meta = table.options.meta;
	meta?.setEditedRows(old => ({
		...old,
		[row.id]: !old[row.id],
	}));

	// Using the id api post call needs to be made
};
