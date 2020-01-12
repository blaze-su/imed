import React, { useState } from "react";
import Link from "next/link";
import css from "./index.scss";
import { ILink } from "@interfaces";

export interface IAccordion {
  _id: string;
  title: string;
  sort?: number; 
  links?: ILink[];
}

export const Accordion = (props: IAccordion) => {
  const [active, toggleActive] = useState(false);
  const { _id, title, links } = props;
  return (
    <div key={_id} className={css.wrapper}>
      <div className={css.item} onClick={() => toggleActive(!active)}>
        <span className={css.title}>{title}</span>
        <div className={active ? css.crossActive : css.cross} />
      </div>
      <div className={active ? css.innerListActive : css.innerList}>
        {links !== undefined ? (
          <nav>
            {links.map(({ title, link, _id }: ILink) => (
              <Link href={link} key={_id}>
                <a className={css.innerItem}>{title}</a>
              </Link>
            ))}
          </nav>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
