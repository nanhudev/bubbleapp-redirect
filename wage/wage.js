const monthlySalary = 12_000;
const start = 10.5 * 3600;
const end = 18 * 3600;
const shanghaiDate = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Shanghai', year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric', hourCycle: 'h23',
});

function isWeekday(day) {
  return day >= 1 && day <= 5;
}

export function calculateWage(now) {
  const parts = Object.fromEntries(
    shanghaiDate.formatToParts(now).map(({ type, value }) => [type, Number(value)]),
  );
  const { year, month, day, hour, minute, second } = parts;
  const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate();
  const firstWeekday = new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
  let workdays = 0;
  let completedDays = 0;
  for (let date = 1; date <= daysInMonth; date++) {
    if (isWeekday((firstWeekday + date - 1) % 7)) {
      workdays++;
      if (date < day) completedDays++;
    }
  }

  const workingToday = isWeekday((firstWeekday + day - 1) % 7);
  const seconds = hour * 3600 + minute * 60 + second + now.getUTCMilliseconds() / 1000;
  const fraction = workingToday ? Math.max(0, Math.min(1, (seconds - start) / (end - start))) : 0;
  const daily = monthlySalary / workdays;
  let status = '计薪中';
  if (!workingToday) status = '周末休息';
  else if (seconds < start) status = '等待上班';
  else if (seconds >= end) status = '今日已下班';

  return {
    workdays,
    daily,
    hourly: daily / ((end - start) / 3600),
    earnedToday: fraction * daily,
    earnedThisMonth: monthlySalary * ((completedDays + fraction) / workdays),
    fraction,
    status,
    month,
  };
}
