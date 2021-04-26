import Link from 'next/link';
import Image from 'next/image';

const CustomLink = (props) => {
    const href = props.href
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
  
    if (href) {
      return (
        <a className="link" href={props.href}>
          <span className="dotted" data-content={props.content}>{props.content}</span>
        </a>
      );
    }
  
    return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

const MDXComponents = {
    Image,
    a: CustomLink
}

export default MDXComponents