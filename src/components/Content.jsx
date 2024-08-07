export default function Content({ content }) {
  return (
    <div className="content-container flex flex-col items-start gap-[5px]">
      <img
        src={content.img}
        alt={content.title}
        className="w-[300px] rounded-[20px] mb-[3px]"
      />
      <span className="text-xs text-[#d7fa00] border border-solid	border-[#d7fa00] px-[4px] py-[5px] rounded-[20px]">
        모집중
      </span>
      <div className="text-lg font-semibold">{content.title}</div>
      <p className="text-xs text-[rgb(160, 160, 160)]">{content.subtitle}</p>
    </div>
  );
}
