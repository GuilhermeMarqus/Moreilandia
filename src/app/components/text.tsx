interface TitleHighlightProps {
  before: string
  highlight: string
  after: string
}

export default function Title({ before, highlight, after }: TitleHighlightProps) {
  return (
    <div className="py-2 px-4 text-center">
      <h1 className="text-[60px] font-extrabold">
        <span className="text-white">{before} </span>
        <span className="text-[#783000]">{highlight}</span>
        <span className="text-white"> {after}</span>
      </h1>
    </div>
  )
}