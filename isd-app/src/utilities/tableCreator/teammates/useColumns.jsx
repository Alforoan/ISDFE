import { useMemo } from 'react';

const useColumns = () => {
	return useMemo(
		() => [
			{
				header: 'Name',
				accessorKey: 'name',
				cell: info => info.getValue(),
				footer: props => props.column.id,
			},
			{
				header: 'Status',
				accessorKey: 'status',
				cell: info => info.getValue(),
				footer: props => props.column.id,
			},
			{
				header: 'Role',
				accessorKey: 'role',
				cell: info => info.getValue(),
				footer: props => props.column.id,
			},
			{
				header: 'Email address',
				accessorKey: 'email',
				cell: info => info.getValue(),
				footer: props => props.column.id,
			},
			{
				header: '',
				accessorKey: 'Edit-delete',
				cell: info => info.getValue(),
				footer: props => props.column.id,
				enableSorting: false,
			},
		],
		[],
	);
};

export default useColumns;
