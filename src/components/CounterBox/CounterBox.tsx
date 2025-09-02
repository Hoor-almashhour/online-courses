"use client";

interface CounterItem {
  value: string;
  label: string;
}

const counters: CounterItem[] = [
  { value: "25K+", label: "Active Students" },
  { value: "899", label: "Total Courses" },
  { value: "158", label: "Instructors" },
  { value: "100%", label: "Satisfaction Rate" },
];

export default function CounterBox() {
  return (
    <section className="py-12 ">
      <div className="md:max-w-[89vw] mx-auto">
        <div
          className="
            flex flex-col items-center md:flex-row md:justify-between md:flex-wrap
            gap-6
           "
        >
          {counters.map((item, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center justify-center w-[284px]
                bg-gray-100 rounded-3xl p-10
              "
            >
              <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
                {item.value}
              </h2>
              <p className="mt-2 text-gray-700 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
