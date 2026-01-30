---
layout: post
title: "A Complete Guide to React Hooks"
date: 2025-01-05
author: "John Doe"
categories: ["React", "JavaScript"]
tags: ["react", "hooks", "javascript", "frontend"]
excerpt: "Master React Hooks to write cleaner, more reusable components. Learn useState, useEffect, and custom hooks with practical examples."
image: "/assets/images/blog/react-hooks.jpg"
---

React Hooks revolutionized how we write React components. They allow us to use state and other React features in functional components, making our code cleaner and more reusable.

## What are Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 and have become the standard way to write React components.

## useState Hook

The `useState` hook allows you to add state to functional components:

```javascript
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
```

## useEffect Hook

The `useEffect` hook lets you perform side effects in functional components:

```javascript
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        fetch(`/api/users/${userId}`)
            .then(response => response.json())
            .then(data => setUser(data));
    }, [userId]);
    
    if (!user) return <div>Loading...</div>;
    
    return <div>{user.name}</div>;
}
```

## Custom Hooks

You can create your own hooks to extract component logic into reusable functions:

```javascript
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [url]);
    
    return { data, loading, error };
}
```

## Rules of Hooks

1. Only call hooks at the top level - don't call them inside loops, conditions, or nested functions
2. Only call hooks from React function components or custom hooks

## Common Hooks

- **useState**: Manage component state
- **useEffect**: Handle side effects
- **useContext**: Access React context
- **useReducer**: Manage complex state logic
- **useCallback**: Memoize functions
- **useMemo**: Memoize values

## Conclusion

React Hooks make functional components as powerful as class components while keeping your code cleaner and more maintainable. Start using them in your projects today!

