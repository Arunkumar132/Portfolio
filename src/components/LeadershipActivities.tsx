import { Users } from "lucide-react";

const LeadershipActivities = () => {
  const activities = [

    {
      role: "Department Secretary - AI & DS Department",
      organization: "Coimbatore Institute of Technology",
      duration: "2023 - 2024",
      details:
        "Coordinated academic and technical events, organized workshops on AI and Machine Learning, guided juniors in events and represented the department in institutional activities.",
    },
    {
        role: "Director",
        organization: "KKC Club",
        duration: "2023 - Present",
        details:
            "Oversee club operations and initiatives, plan and execute events, mentor members and guide the team in achieving organizational goals. Focused on fostering teamwork, leadership and community engagement.",
    },

    {
      role: "Badminton Team Captain",
      organization: "CIT Badminton Club",
      duration: "2022 - 2025",
      details:
         "Led the college badminton team, conducted regular training sessions, strategized match plays and motivated teammates. Under my captaincy, the team won the Centies Championship and the Covai Ties Championship.",
    },
    {
        role: "Volunteer",
        organization: "Vidiyal Trust",
        duration: "2023 - Present",
        details:
            "Organized and coordinated social initiatives and community service events and contributed to impactful projects improving education and social welfare for underprivileged students.",
    },
  ];

  return (
    <section id="leadership-activities" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-[48px]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Leadership <span className="gradient-text">Activities</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-xl font-semibold flex items-center gap-2 gradient-text">
                <Users className="w-5 h-5" /> {activity.role}
              </h3>
              <p className="text-muted-foreground text-sm mb-1">
                {activity.organization} | {activity.duration}
              </p>
              <p className="text-muted-foreground text-sm">{activity.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipActivities;
