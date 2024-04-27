---
title: 【Typescript】Exclude 工具类型
---

`Exclude` 是 typescript 中内置的工具类型,它用于从一个联合类型中排除掉不希望包含的类型,生成一个新的类型.

```typescript
/**
 * Exclude from T those types that are assignable to U.
 * typescript/lib/lib.es5.d.ts
 */
type Exclude<T, U> = T extends U ? never : T;

type T0 = Exclude<"a" | "b" | "c", "a" | "b">
// type T0 = "c"
```

## 排除指定的基本数据类型

```typescript
type MyTypes = string | number | boolean;
type StringOrNumber = Exclude<MyTypes, boolean>;

let uid: StringOrNumber = "semlinker" // Ok
uid = 2024 // Ok
uid = false // Error
// Type 'boolean' is not assignable to type 'StringOrNumber'.
```

## 排除 string 或 number 类型的子类型

```typescript
type Status = "success" | "error" | 200 | 500;

type StringStatus = Exclude<Status, number>;
// type StringStatus = "success" | "error"

type NumberStatus = Exclude<Status, string>
// type NumberStatus = 200 | 500
```

## 排除两个联合类型的共有成员

```typescript
type TaskStatus = "Todo" | "InProgress" | "Done" | "Archived";
type ModuleHandledStatus = "Todo" | "Done" | "OnHold";

type TaskOnlyStatus = Exclude<TaskStatus, ModuleHandledStatus>;
// type TaskOnlyStatus = "InProgress" | "Archived"
```

## 排除含有特定属性的子类型

```typescript
type Animal =
    | { type: 'dog', legs: number }
    | { type: 'cat', legs: number }
    | { type: 'fish', fins: number };
type AnimalsWithFins = Exclude<Animal, { legs: number }>;

const fish: AnimalsWithFins = { type: 'fish', fins: 6 }; // Ok
const dog: AnimalsWithFins = { type: 'dog', legs: 4 }; // Error
// Type '"dog"' is not assignable to type '"fish"'.
```

## 排除同个属性不同类型的子类型

除了可以使用 `Exclude<Animal, { legs: number }>` 来创建 AnimalsWithFins 类型，该类型还可以通过 `Exclude<Animal, { type: 'dog' | 'cat' }>` 这种方式来创建。

```typescript
type Animal =
    | { type: 'dog', legs: number }
    | { type: 'cat', legs: number }
    | { type: 'fish', fins: number };

type AnimalsWithFins = Exclude<Animal, { type: 'dog' | 'cat' }>;

const fish: AnimalsWithFins = { type: 'fish', fins: 6 }; // Ok
const dog: AnimalsWithFins = { type: 'dog', legs: 4 }; // Error
// Type '"dog"' is not assignable to type '"fish"'.
```

## 排除枚举类型的某些成员

利用 Exclude 工具类型可以排除枚举中的某些成员，从而得到一个新的类型。

```typescript
enum Status { New, InProgress, Done, Cancelled }

type ActiveStatus = Exclude<Status, Status.Done | Status.Cancelled>;
// type ActiveStatus = Status.New | Status.InProgress
```

## 排除指定前缀的字符串字面量类型

利用 Exclude 工具类型和模板字面量类型，可以实现从字符串字面量联合类型中，排除指定前缀或后缀的字符串字面量。

```typescript
type LogEvent =
    | "userLogin"
    | "userLogout"
    | "systemException"
    | "systemCrash"
    | "performanceLoadTime"
    | "performanceApiResponse";

type SystemAndPerformanceEvents = Exclude<LogEvent, `user${string}`>;
// type SystemAndPerformanceEvents = "systemException" | "systemCrash" | "performanceLoadTime" | "performanceApiResponse"
```

## 排除不同格式的字符串字面量类型

```typescript
type LogEvent =
    | "userLogin"
    | "userLogout"
    | "UserLogin" // New
    | "UserLogout" // New
    | "systemException"
    | "systemCrash"
    | "performanceLoadTime"
    | "performanceApiResponse";

type SystemAndPerformanceEvents = Exclude<LogEvent, `${"user" | "User"}${string}`>;
// type SystemAndPerformanceEvents = "systemException" | "systemCrash" | "performanceLoadTime" | "performanceApiResponse"
```
