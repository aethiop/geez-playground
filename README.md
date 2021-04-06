# [ግዕዝ / Ge'ez](https://geez.marda.studio) - Amharic programming language.

Geez is simple programming language which is built on top of JavaScript. An online IDE is also provided [here](https://geez.marda.studio). The website or even the language is not finished yet but has many functionalities which can be used.

#

## Variables

#

Are used to store information on the memory by refering them with their corresponding name.

```
# ስም("አበበ") -> ሐረግ
ስም = "አበበ"፤

# አድሜ(21) -> ቁጥር
እድሜ = 21፤

# ተማሪ_ነው(true) -> አውነታ
ተማሪ_ነው = አውነት፤

# አግብቷል(false) -> አውነታ
አግብቷል = ሀሰት፤

# ውጤት(0 1 2 3 4 5 ...) -> ሰልፍ
ውጤት = ሰልፍ(88፣ 90፣ 79፣ 100፣ 100)፤
```

`Functions are also declared as a variable like below`

```
ስም_ከነ_አባት = >>> (ስም፣ አባት)
{
	ፃፍ("መረጃ")፤
	ፃፍ("ስም፥ "፣ ስም)፤
    ፃፍ("የአባት ስም፥ "፣ አባት)፤
}፤

ስም_ከነ_አባት("ናትናኤል"፣ "ብርሀኑ")፤
```

```
		መረጃ
		ስም፥  ናትናኤል
		የአባት ስም፥  ብርሀኑ
```

#

## Comments

#

Any text written as `#`+ `String` is ignored and wouldn't affect the program.

```
######################################
# እዚህ ጋር የትፃፈው ምንም ለውጥ የለውም። #
######################################
```

#

## Expression

#

Everything on the program is an expression and is ended by the symbol `፤`

```
ፃፍ("1")፤    # Expression 1
ፃፍ("2")፤	# Expression 2
ፃፍ("3")፤	# Expression 3
```

Expressions can also be nested inside a function which contains a block of expressions inside curly braces `{ Body }`

#

## Operators

#

Operators are special tokens that represent computations like addition, multiplication, power, division and the modulus(reminder).

```
ፃፍ(2 + 3)፤
ፃፍ(2 - 3)፤
ፃፍ(2 * 3)፤
ፃፍ(3 / 2)፤
ፃፍ(2 ** 3)፤
ፃፍ(3 % 2)፤
```

#

## Functions

#

```
ስራ = >>> ()
	{
		ፃፍ("1")፤    # Expression 1
		ፃፍ("2")፤	# Expression 2
		ፃፍ("3")፤	# Expression 3
	}፤

ስራ()፤
```

Functions are blocks of code which can be executed after defining using `>>>`

Functions can have arguments inside the parentheses.

```
ደምር_7 = >>> (ሀ)
	{
		ፃፍ(ሀ + 7)፤
    }፤

ደምር_7(12)፤
```

Can also have multiple arguments separated by comma or `፣`

```
ደምር = >>> (ሀ፣ ለ)
	{
		ፃፍ(ሀ + ለ)፤
	}፤

ደምር(4፣ 5)፤
ደምር(1231፣ 41151)፤
```

#

## Conditional Statements

#

Conditional Statements are expressions with the keyword `ከሆነ` and `ካልሆነ` which controls the flow of execuiton by checking an expression which results in executing block.

```
እድሜ = 20፤

ከሆነ (እድሜ < 18) {
	ፃፍ("ልጅ።")፤
} ካልሆነ {
	ፃፍ("ወጣት")፤
}፤
```

Conditionals can also be stated one line such that if the condition is true

```
True 										False
ከሆነ (Condition) ከዛ (Expression) 			ካልሆነ (Expression)፤
```

```
ፊብ = >>> (ሀ) { ከሆነ ሀ < 2 ከዛ ሀ ካልሆነ ፊብ(ሀ - 1) + ፊብ(ሀ-2) }፤
ፃፍ(ፊብ(7))፤
```

#

## Loops

#

Loops can be implemented recursively

```
ዘርዝር = >>> (ሀ፣ ለ)
		{
        	ፃፍ(ሀ)፤
        	ከሆነ (ሀ < ለ) {
            	ዘርዝር(ሀ + 1፣ ለ)፤
            }፤
       	}፤
ዘርዝር(1፣ 10)፤
```

OR

```
ሰይም ዝርዝር (ሀ = 0)
	{
		ከሆነ ሀ <= 2 {
			ፃፍ(ሀ)፤
			ዝርዝር(ሀ +1)፤
		}፤
	}፤
```

# Extra

፩

```
ወረቀት()፤

ሀ = ስፋት/2፤
ቀያሪ = 3፤

አንቀሳቅስ = ስራ() {
	ፍሬም(አንቀሳቅስ)፤
    አጥፋ(0፣ 0፣ ስፋት፣ ርዝመት)፤
	ቀባ(105፣240፣114)፤
	ክብ(ሀ፣ ርዝመት/2፣ 30)፤
    ከሆነ (ሀ + 30 > ስፋት || ሀ - 30 < 0)
    {
		ቀያሪ = ቀያሪ * (0-1)፤
    }፤
    ሀ = ሀ + ቀያሪ፤
}፤

አንቀሳቅስ()፤

```

፪

```
ወረቀት()፤

አንቀሳቅስ = ስራ() {
	ፍሬም(አንቀሳቅስ)፤
    አጥፋ(0፣0፣ ስፋት፣ ርዝመት)፤
    ቀባ(244፣ 122፣ 200፣ 0.8)፤
	ክብ(የት_አግድም፣ የት_ሽቅብ፣ 30)፤
}፤

አንቀሳቅስ()፤
```
