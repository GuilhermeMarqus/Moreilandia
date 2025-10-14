interface TitleHighlightProps {
  before: string
  highlight: string
  after: string
  yellow: string
}

export default function Title({ before, highlight, after, yellow }: TitleHighlightProps) {
  return (
    <div className="py-2 px-4 text-center">
      <h1 className="text-[60px] font-extrabold">
        <span className="text-white">{before} </span>
        <span className="text-[#783000]">{highlight}</span>
        <span className="text-white"> {after}</span>
        <span className="text-[#F6A721]"> {yellow}</span>
      </h1>
    </div>
  )
}