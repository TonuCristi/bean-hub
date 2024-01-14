export function getTimePassed(time: string) {
  const timePassed = (new Date().getTime() - new Date(time).getTime()) / 60000;

  if (timePassed / 525600 > 1) {
    return `${Math.round(timePassed / 525600)}${
      Math.round(timePassed / 525600) === 1 ? " year" : " years"
    } ago`;
  }

  if (timePassed / 43200 > 1 && timePassed / 43200 < 12) {
    return `${Math.round(timePassed / 43200)}${
      Math.round(timePassed / 43200) === 1 ? " month" : " months"
    } ago`;
  }

  if (timePassed / 1440 >= 28 && timePassed / 1440 <= 28.5) {
    return `${Math.round(timePassed / 1440 / 7)} weeks ago`;
  }

  if (timePassed / 1440 >= 21 && timePassed / 1440 <= 21.5) {
    return `${Math.round(timePassed / 1440 / 7)} weeks ago`;
  }

  if (timePassed / 1440 >= 14 && timePassed / 1440 <= 14.5) {
    return `${Math.round(timePassed / 1440 / 7)} weeks ago`;
  }

  if (timePassed / 1440 >= 7 && timePassed / 1440 <= 7.5) {
    return `${Math.round(timePassed / 1440 / 7)} week ago`;
  }

  if (timePassed / 1440 > 7) {
    return `${Math.round(timePassed / 1440)}${
      Math.round(timePassed / 1440) === 1 ? " day" : " days"
    } ago`;
  }

  if (timePassed / 1440 >= 1 && timePassed / 1440 < 7) {
    return `${Math.round(timePassed / 1440)}${
      Math.round(timePassed / 1440) === 1 ? " day" : " days"
    } ago`;
  }

  if (timePassed / 60 > 1 && timePassed / 60 <= 24) {
    return `${Math.round(timePassed / 60)} hour ago`;
  }

  return `${Math.round(timePassed)} minutes ago`;
}
