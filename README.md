# Variables

### Var Keyword
> Can be reassigned and are only available inside the function they're created in. Its function scoped.
```javascript
var variableName = value;
```

### Let Keyword
> It can be reassinged but its similar to const i.e. block scoped.
```javascript
let variableName = value;
```

### Const Keyword
> Cannot be reassigned and not accessible before they appear within the code. Its block scoped.
```javascript
const variableName = value;
```

| Keyword | scope                            | Redeclared (within the scope) |
|:-------:|:--------------------------------:|:-----------------------------:|
|var      | Global or Functional scope       | Yes                           |
|let      | Block scope (inside {})          | No                            |
|const    | Block scope (inside {})          | No                            |

--------------------------------------

#### What is the block ?
> A block is a set of opening and closing curly brackets.
