const formatContent = (item) => {
  if (typeof item === "string") {
    return item;
  }

  switch (item.type) {
    case "text":
      return <span className="text-justify">{item.text}</span>;
    case "link":
      return (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4C4CFC] text-justify"
        >
          {item.children.map((child, index) => (
            <React.Fragment key={index}>{formatContent(child)}</React.Fragment>
          ))}
        </a>
      );
    case "heading":
      const HeadingTag = `h${item.level}`;
      return (
        <HeadingTag className="text-justify">
          {item.children.map((child, index) => (
            <React.Fragment key={index}>{formatContent(child)}</React.Fragment>
          ))}
        </HeadingTag>
      );
    case "image":
      return (
        <div className="w-full flex justify-center items-center">
          <img src={item.image.url} alt={item.image.name} loading="lazy" />
        </div>
      );
    case "paragraph":
      return (
        <p className="mb-[32px] text-justify">
          {item.children.map((child, index) => (
            <React.Fragment key={index}>{formatContent(child)}</React.Fragment>
          ))}
        </p>
      );
    default:
      return null;
  }
};