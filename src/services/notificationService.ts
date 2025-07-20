import { BehaviorSubject } from "rxjs";

const countSubject = new BehaviorSubject<number>(0);

export const count$ = countSubject.asObservable();

export const updateNotificationCount = (newCount: number) => {
  countSubject.next(newCount);
};

export const getCurrentNotificationCount = () => {
  return countSubject.value;
};
