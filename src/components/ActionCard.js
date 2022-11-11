
const ActionCard = ({ image, title, text }) => {
  return (
    <div className="rounded-lg bg-white shadow-md px-6 py-3 flex items-center gap-5">
      <img
        src={image}
        className="h-14 w-14"
        alt="Unable to load"
      />
      <div className="space-y-1">
        <p className="text-slate-800 font-medium">{title}</p>
        <p className="text-slate-700 text-sm">{text}</p>
      </div>
    </div>
  )
}

export default ActionCard