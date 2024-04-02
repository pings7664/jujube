---
title: [Typescript] Extract 工具类型
---

Extract 是 Typescript 中内置的工具类型，用于从类型中提取出指定的属性,生成一个新的类型。这类工具类型在日常开发中非常有用,能够帮助编写类型安全的代码和更好的实现代码复用.

```typescript
/**
 * Extract from T those types that are assignable to U.
 * typescript/lib/lib.es5.d.ts
 */
type Extract<T, U> = T extends U ? T : never;

type T0 = Extract<"a" | "b" | "c", "a" | "f">
// type T0 = "a"
```

## 提取指定的基本数据类型

```typescript
type MyTypes = string | number | boolean;
type StringOrNumber = Extract<MyTypes, string | number>;

let uid: StringOrNumber = "semlinker" // Ok
uid = 2024 // Ok
uid = false // Error
// Type 'boolean' is not assignable to type 'StringOrNumber'.
```

## 提取指定的字符串字面量类型

```typescript
type Color = 'red' | 'green' | 'blue' | 'yellow';
type PrimaryColors = Extract<Color, 'red' | 'green' | 'blue'>;

const primaryColor: PrimaryColors = 'blue'; // Ok
const secondaryColor: PrimaryColors = 'yellow'; // Error
// Type '"yellow"' is not assignable to type 'PrimaryColors'.
```

## 提取可调用的函数类型

```typescript
type Value = string | number | (() => void);
type CallableFn = Extract<Value, Function>;

const fn1: CallableFn = () => console.log('semlinker'); // Ok
const fn2: CallableFn = 'semlinker'; // Error
// Type 'string' is not assignable to type '() => void'.
```

## 提取两个联合类型的共有成员

```typescript
type TaskStatus = 'Todo' | 'InProgress' | 'Done' | 'Archived';
type ModuleHandledStatus = 'Todo' | 'Done' | 'OnHold';

type ModuleSpecificStatus = Extract<TaskStatus, ModuleHandledStatus>;
// type ModuleSpecificStatus = "Todo" | "Done"
```

## 提取含有特定属性的子类型

`Animal`联合类型,包含了多种动物的描述对象,想从中提取出含有"legs"属性的子类型.

```typescript
type Animal =
  | { type: 'dog', legs: number }
  | { type: 'cat', legs: number }
  | { type: 'fish', fins: number };

type AnimalsWithLegs = Extract<Animal, { legs: number }>;

const dog: AnimalsWithLegs = { type: 'dog', legs: 4 }; // Ok
const cat: AnimalsWithLegs = { type: 'cat', legs: 4 }; // Ok
const fish: AnimalsWithLegs = { type: 'fish', fins: 6 }; // Error
// Type '"fish"' is not assignable to type '"dog" | "cat"'.
```

## 提取特定的事件类型

```typescript
type EventTypes = MouseEvent | KeyboardEvent | TouchEvent;

type OnlyMouseEvents = Extract<EventTypes, MouseEvent>;

function handleMouseEvent(event: OnlyMouseEvents) {
  console.log('Handling mouse event:', event.clientX, event.clientY);
}

document.addEventListener('click', (event) => {
  handleMouseEvent(event); // OK
});

document.addEventListener('keydown', (event) => {
  handleMouseEvent(event); // Error
  // Argument of type 'KeyboardEvent' is not assignable to parameter of type 'MouseEvent'.
});
```

## 在类型守卫中使用 Extract

使用 `Extract` 可以在类型守卫中精确地过滤类型，使得在条件分支中可以安全地使用过滤后的类型。

```typescript
type Pet = { type: 'dog', bark: () => void } | { type: 'cat', meow: () => void };

function isDog(pet: Pet): pet is Extract<Pet, { type: 'dog' }> {
  return pet.type === 'dog';
}

const pet1: Pet = { type: 'dog', bark: () => console.log('Woof!') }
const pet2: Pet = { type: "cat", meow: () => console.log("Meow!") }
console.log(`pet1 is dog: ${isDog(pet1)}`) // "pet1 is dog: true" 
console.log(`pet2 is dog: ${isDog(pet2)}`) // "pet2 is dog: false" 
```

## 在函数重载中使用 Extract

在处理 API 请求的场景中,需要根据不同的请求类型(如 GET、POST、DELETE)处理不同类型的数据。为了增强类型安全和确保每种请求类型都正确地处理其数据，可以利用 TypeScript 的函数重载和 Extract 工具类型。

```typescript
type RequestType = 'GET' | 'POST' | 'DELETE';
type RequestData = {
  GET: undefined;
  POST: { body: string };
  DELETE: { resourceId: number };
};

// Function overloading, based on the request type, accepts matching data types
function sendRequest<T extends RequestType>(type: 'GET', data: Extract<RequestData[T], undefined>): void;
function sendRequest<T extends RequestType>(type: 'POST', data: Extract<RequestData[T], { body: string }>): void;
function sendRequest<T extends RequestType>(type: 'DELETE', data: Extract<RequestData[T], { resourceId: number }>): void;
function sendRequest<T extends RequestType>(type: T, data: RequestData[T]): void {
  console.log(`Sending ${type} request with data:`, data)
}

sendRequest('GET', undefined) // Ok
sendRequest('POST', { body: 'semlinker' }) // Ok
sendRequest('DELETE', { resourceId: 2024 }) // Ok

sendRequest('POST', { body: 2024 }) // Error
// Type 'number' is not assignable to type 'string'.
sendRequest('DELETE', undefined) // Error
// Argument of type 'undefined' is not assignable to parameter of type '{ resourceId: number; }'.
```