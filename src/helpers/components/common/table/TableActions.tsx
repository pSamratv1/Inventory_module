/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { CustomImage, IconButton } from "..";
import { delete_svg, edit_svg, view_svg } from "../../../assets/img";

export type TableActionsSchema = {
  handleViewAction: () => void;
  handleEditAction: (id: number) => void;
  handleDeleteAction: () => void;
};

const iconActions = ({
  handleViewAction,
  handleEditAction,
  handleDeleteAction,
}: any) => [
  {
    css: {},
    icon: (
      <CustomImage
        src={view_svg}
        css={{ divCss: "w-3", imgCss: "text-2xl " }}
        alt={view_svg}
      />
    ),
    handleAction: handleViewAction,
  },
  {
    css: {},
    icon: <CustomImage src={edit_svg} css={{ divCss: "w-3" }} alt={edit_svg} />,
    handleAction: handleEditAction,
  },
  {
    css: {},
    icon: (
      <CustomImage src={delete_svg} css={{ divCss: "w-3" }} alt={delete_svg} />
    ),
    handleAction: handleDeleteAction,
  },
];

export default function TableActions(props: TableActionsSchema) {
  return (
    <div className="flex gap-2 ">
      {iconActions({ ...props }).map((item: any, idx: number) => (
        <IconButton key={`${idx}. TableAction IconButton`} {...item} />
      ))}
    </div>
  );
}
