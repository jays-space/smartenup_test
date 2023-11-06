# React + TypeScript + Vite

# Smartup Assessment

## Install instructions

-Run `npm install`


## Overview

### Design and Architecture

My preference is to use typescript in projects. I tried to set out the app in modules, i.e.: should there be more services to be added, I would introduce modules that would contain all logic for a given set of features interacting with a specific slice of the app. Each module would contain the types, utils, business logic etc for the given slice.

Outside of services/modules are folders that contain globally used logic.

Implementing aliases helped in readability.

I implemented a flavour ot the Atomic design system: atoms => elements => templates.To begin to add more consistency and speed in implementation, I used tailwind css.

### Unable to do due to time constraints
 - Complete Integration Tests 
 - Factorize templates (break them apart into more specialized components)
 - Refactoring the carousels logic (specifically, the testimonials)
 - Refactoring the logic for the Headings where color should be added to specific words in a string
 - Refactoring theming and Responsive design implementation
 - Fixed issue where on smaller screens, when the user opens the menu, the user is still able to scroll.
 - Better styling for the menu

### What could I have been done differently
I think focused on getting as best an architecture and testing lib as possible. Yet I feel I spent a little too much time on the former in an attempt to get this over the line in as 'good' a condition as possible.

My current pursuit is to work toward a TDD driven approach to engineering applications. I am working to this end in improving my skills as an engineer.
