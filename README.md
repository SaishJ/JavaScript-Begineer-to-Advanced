# Variables

### Var Keyword
> Var declaration are globally scoped or function scoped. The scope is global when a 'var' variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window. 'var' is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.

### Let Keyword
> Let keyword is used to declare variables that can change later so basically during the execution of program. 'Let' is mutable i.e. variables declared with let can be changed. Also declare a 'let' variable at one place and assign a value later in the same scope or an inner scope.

### Const Keyword
> Const keyword is used to declare variables that are not supposed to change at any point in the future. The value in a const variable cannot be changed. 'const' variable is immutable i.e. it cannot be re-assigned.

| Keyword | scope                            | Redeclared (within the scope) |
|:-------:|:--------------------------------:|:-----------------------------:|
|var      | Global or Functional scope       | Yes                           |
|let      | Block scope (inside {})          | No                            |
|const    | Block scope (inside {})          | No                            |
