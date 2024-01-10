import React, { useEffect, useRef, useState } from 'react';
import ArrowDown from '../../../assets/icons/arrow-down.svg';
import ArrowUp from '../../../assets/icons/arrow-up.svg';
import Delete from '../../../assets/icons/trash.svg';
import Edit from '../../../assets/icons/edit.svg';
import useColumns from './useColumns';

import {
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { deleteMember, editMember } from './apiFunctions';

const Table = ({ tableData, setMembers }) => {
	const [data, setData] = useState([]);
	const [sorting, setSorting] = useState([]);
	const isResizingRef = useRef(false);
	const columns = useColumns();

	useEffect(() => {
		setData(tableData);
	}, [tableData]);

	const table = useReactTable({
		data,
		columns,
		columnResizeMode: 'onChange',
		state: {
			sorting,
		},
		defaultColumn: {
			size: 50,
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		debugTable: true, //remove for production
	});

	// Table Render helpers
	const renderHeaderSorterIcons = header => {
		const isSortable = header.column.getCanSort();
		if (isSortable) {
			return (
				<>
					{{
						asc: (
							<img
								src={ArrowUp}
								alt='Arrow'
								className='arrow-icon'
							/>
						),
						desc: (
							<img
								src={ArrowDown}
								alt='Arrow'
								className='arrow-icon'
							/>
						),
					}[header.column.getIsSorted() ? 'asc' : 'desc'] ?? null}
				</>
			);
		}
	};

	const renderTableHeaders = headerGroup => {
		return (
			<>
				{headerGroup.headers.map(header => {
					const isSortable = header.column.getCanSort();
					return (
						<th
							className={isSortable ? 'header' : null}
							key={header.id}
							colSpan={header.colSpan}
							onMouseDown={e => {
								if (!isResizingRef.current && isSortable) {
									header.column.getToggleSortingHandler()(e);
								}
							}}
							style={{ width: header.getSize() }}
							onMouseEnter={() => {
								if (isResizingRef) {
									header.column.getResizerElement().style.opacity =
										'0';
								}
							}}
							onMouseLeave={() => {
								if (!isResizingRef) {
									header.column.getResizerElement().style.opacity =
										'1';
								}
							}}>
							{header.isPlaceholder ? null : (
								<div>
									{flexRender(
										header.column.columnDef.header,
										header.getContext(),
									)}
									{renderHeaderSorterIcons(header)}
								</div>
							)}
							{isSortable ? (
								<div
									{...{
										onDoubleClick: () =>
											header.column.resetSize(),
										onMouseDown: e => {
											isResizingRef.current = true;
											e.stopPropagation();
											header.getResizeHandler()(e);
										},
										onMouseUp: () => {
											e.stopPropagation();
											isResizingRef.current = false;
										},
										onTouchStart: e => {
											isResizingRef.current = true;
											e.stopPropagation();
											header.getResizeHandler()(e);
										},
										onTouchEnd: e => {
											e.stopPropagation();
											isResizingRef.current = false;
										},
										onMouseLeave: e => {
											e.stopPropagation();
											isResizingRef.current = false;
										},
										className: 'resizer',
									}}
								/>
							) : null}
						</th>
					);
				})}
			</>
		);
	};

	const uniqueRenders = cell => {
		if (cell.column.columnDef.header === 'Status') {
			return (
				<div
					className={`status-icon ${
						cell.row.original.status
							? 'active-status'
							: 'inactive-status'
					}`}>
					<span>&bull;</span>
					{cell.row.original.status ? 'Active' : 'invited'}
				</div>
			);
		} else if (cell.column.columnDef.header === '') {
			return (
				<div className='icon-container'>
					<img
						src={Delete}
						alt='Delete'
						className='delete'
						onClick={e => {
							deleteMember(e, cell, setMembers);
						}}
					/>
					<img
						src={Edit}
						alt='Edit'
						className='edit'
						onClick={e => {
							editMember(e, cell, setMembers);
						}}
					/>
				</div>
			);
		} else {
			return flexRender(cell.column.columnDef.cell, cell.getContext());
		}
	};

	const renderTableBody = () => {
		return (
			<>
				{table
					.getRowModel()
					.rows.slice(0, 10)
					.map(row => {
						return (
							<tr key={row.id} className='table-body-row'>
								{row.getVisibleCells().map(cell => {
									return (
										<td
											key={cell.id}
											className={`td-cell ${
												cell.column.columnDef.header ===
												'Status'
													? 'status'
													: ''
											} 
											${cell.column.columnDef.header === 'Name' ? 'name' : ''}`}
											style={{
												width: cell.column.getSize(),
											}}>
											{uniqueRenders(cell)}
										</td>
									);
								})}
							</tr>
						);
					})}
			</>
		);
	};

	// Api helper function
	const [invitations, setInvitations] = useState([
		{ name: '', email: '', role: '', status: false },
	]);

	const addTeammates = () => {
		setInvitations([
			...invitations,
			{ name: '', email: '', role: '', status: false },
		]);
	};

	const removeTeammates = () => {
		if (invitations.length > 1) {
			setInvitations([...invitations.slice(0, invitations.length - 1)]);
		}
	};

	return (
		<table>
			<thead>
				{table.getHeaderGroups().map(headerGroup => (
					<tr key={headerGroup.id} className='table-header-row'>
						{renderTableHeaders(headerGroup)}
					</tr>
				))}
			</thead>
			<tbody>
				{renderTableBody()}
				<tr
					className='table-body-row add-teammates'
					onClick={addTeammates}>
					<td className='add-teammates-text' colSpan={columns.length}>
						+ Add teammates
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Table;
