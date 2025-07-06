import React from 'react';
import SvgIcon from './SvgIcon';
import {Button} from './Button';

export default function ProjectCard({children}: {children: React.ReactNode}) {
  return <div className="project-card">{children}</div>;
}

function Content({children}: {children: React.ReactNode}) {
  return <div className="project-card-content">{children}</div>;
}

function Holder({children}: {children: React.ReactNode}) {
  return <div className="project-card-holder">{children}</div>;
}

function Tags({children}: {children: React.ReactNode}) {
  return <div className="project-card-tags">{children}</div>;
}

function Tag({hashtag}: {hashtag: string}) {
  return <span className="project-card-tag">{hashtag}</span>;
}

function CardActions({visit, source, tag}: {visit?: string; source?: string; tag?: string}) {
  return (
    <div className="project-card-actions">
      {visit && (
        <a href={visit} target="_blank">
          <Button>
            <SvgIcon name={'goto'} alt="goto" />
            Visit {tag && tag}
          </Button>
        </a>
      )}
      {source && (
        <a href={source} target="_blank">
          <Button>
            <SvgIcon name={'github'} alt="Github" />
            Source {tag && tag}
          </Button>
        </a>
      )}
    </div>
  );
}

export {Holder, Content, Tags, Tag, CardActions};
