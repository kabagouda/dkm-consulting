"use client";
import { UpdateSteps } from "@/components/Users/updateSteps";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { deleteDocumentById } from "@/firebase/firestore/getData";
import { customer } from "@/types/customer";
import { CaretSortIcon, ChevronDownIcon, CopyIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { LucideStepForward } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";

export const columns: ColumnDef<customer>[] = [
  {
    id: "select",
    header: ({ table }: { table: any }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }: any) => (
      <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Id",
    cell: ({ row }: any) => (
      <div className="flex items-center space-x-2">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">{row.getValue("id")}</code>
        <Button
          variant="link"
          size={"sm"}
          onClick={() => {
            navigator.clipboard.writeText(row.getValue("id"));
            toast.success("Id copié dans le presse-papier");
          }}
        >
          <CopyIcon className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
  {
    accessorKey: "lastname",
    header: ({ column }: any) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Nom
          <CaretSortIcon className=" h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }: any) => <div className=" uppercase pl-[17px]">{row.getValue("lastname")}</div>,
  },
  {
    accessorKey: "firstname",
    header: ({ column }: any) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Prénom
          <CaretSortIcon className="ml-1 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }: any) => <div className=" capitalize pl-[17px]">{row.getValue("firstname")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }: any) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Email
          <CaretSortIcon className="ml-1 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }: any) => <div className="lowercase pl-[17px]">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "visaType",
    header: ({ column }: any) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Type de visa
          <CaretSortIcon className="ml-1 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }: any) => <div className=" capitalize pl-[17px]">{row.getValue("visaType")}</div>,
  },
  {
    accessorKey: "password",
    header: ({ column }: any) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Mot de passe
          <CaretSortIcon className="ml-1 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }: any) => (
      <div className="flex items-center space-x-2">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          {row.getValue("password")}
        </code>
        <Button
          variant="link"
          size={"sm"}
          onClick={() => {
            navigator.clipboard.writeText(row.getValue("password"));
            toast.success("Mot de passe copié dans le presse-papier");
          }}
        >
          <CopyIcon className="h-4 w-4" />
        </Button>
      </div>
    ),
  },

  {
    accessorKey: "phoneNumber",
    header: ({ column }: any) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Numéro de téléphone
          <CaretSortIcon className="ml-1 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }: any) => <div className="lowercase pl-[17px]">{row.getValue("phoneNumber")}</div>,
  },
  {
    id: "actionsStep",
    enableHiding: false,
    cell: ({ row }: any) => {
      return (
        <>
          <Dialog>
            <DialogTrigger>
              <Button size="sm" className="h-7 gap-1">
                <LucideStepForward className="h-4 w-4" />
              </Button>{" "}
            </DialogTrigger>
            <DialogContent className="">
              <DialogHeader>
                <DialogTitle>Mettre a jour l&apos;etape</DialogTitle>
                <DialogDescription>Ajouter les informations sur le l&apos;etape</DialogDescription>
              </DialogHeader>
              <UpdateSteps customerData={row.original} />
            </DialogContent>
          </Dialog>
        </>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }: any) => {
      const User = row.original;
      const deleteUser = async (id: string) => {
        deleteDocumentById("customers", id);
        toast.success("Le client a été supprimé");
        window.location.reload();
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(`
                  Voici tes informations de connexion.
                  Identifiant : ${User.id}
                  Mot de passe : ${User.password}
                `);
                toast.success("Identifiant copié dans le presse-papier");
              }}
            >
              Copier les identifiants
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => deleteUser(User.id)}>Delete User</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function CustomersTable(documents: any) {
  const { data } = documents;

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("email")?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column: any) => column.getCanHide())
              .map((column: any) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup: any) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header: any) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row: any) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell: any) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
