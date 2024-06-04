import { serviceOptions } from "@/app/utils/serviceOptions";


export default function VenueServices() {
  return (
    <ul className="py-3">
      {serviceOptions.map((s, i) => {
        return (
          <li key={i} className="flex items-center gap-6 py-2 px-1">
            <div>{s.icon}</div>
            <div>
              <p className="font-semibold text-md text-slate-950">{s.title}</p>
              <p className="text-sm text-slate-500 leading-7">{s.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
