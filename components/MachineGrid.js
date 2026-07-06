import MachineCard from "./MachineCard"

export default function MachineGrid({ machines }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {machines.map((machine, index) => (
        <MachineCard key={index} {...machine} />
      ))}
    </div>
  )
}
