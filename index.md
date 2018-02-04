---
layout: default
---

### [](header-6)Factorial Calculation in Java
Type this codes to BPIH4E7B.java:
```java
import javax.swing.*;

public class BPIH4E7B {
    public static void main(String args[]) {
        String s;
        long factorial=1;
        int number=Integer.parseInt(JOptionPane.showInputDialog("Enter a number: "));
        for(int i=1;i<=number;i++)
        {
            factorial*=i;
        }
        s=""+number+"!="+factorial;
        JOptionPane.showMessageDialog(null,s,"Factorial",JOptionPane.PLAIN_MESSAGE);
    }
}
```
Then enter this commands to terminal:
```
javac BPIH4E7B.java

java BPIH4E7B
```
You can calculate factorials of your entered numbers.
Example:
![](https://raw.githubusercontent.com/isikenes/isikenes.github.io/master/assets/images/factcalc.png)

---
---

### [](#header-5)Example for Arithmetics in Java
Type this codes to arithmetics.java:
```java
import java.io.*;

public class arithmetics
{ public static void main(String[] args)
{
    int number1=1;
    int number2=2;
    number1+=number2;
    System.out.println("number1+=:"+number1);
    number1-=number2;
    System.out.println("number1-=:"+number1);
    number1*=number2;
    System.out.println("number1*=:"+number1);
    number1/=number2;
    System.out.println("number1/=:"+number1);
}
        }
```
If you run this, output is like below:
```
number1+=:3
number1-=:1
number1*=:2
number1/=:1
```

---
---

### [](#header-4)Addition in Java
This is a basic example of addition in Java.
```java
import javax.swing.*;

public class addition
{
    public static void main(String args[])
    {
        int number1;
        int number2;
        int total;
        number1=Integer.parseInt(JOptionPane.showInputDialog("Enter the first number: "));
        number2=Integer.parseInt(JOptionPane.showInputDialog("Enter the second number: "));
        total=number1+number2;
        JOptionPane.showMessageDialog(null,"Total= "+total);
    }
    
            
}
```
Then type the codes below to terminal:
```
javac addition.java
java addition
```

---
---

### [](#header-3)Writing "Hello World" in Java
You must type this codes to helloworld.java
```java
public class helloworld {
	public static void main(String[] args) {
		System.out.println("Hello World");
	}
}
```
Then run this codes in terminal:
```
javac helloworld.java
java helloworld
```
That's it!

---
---

### [](#header-2)Shell Script - Christmas Tree
Create christmastree.sh file. Then type the codes below:

```shell
#!/bin/bash

YELLOW='\033[1;33m'; GREEN='\033[0;32m'; ORANGE='\033[0;33m'
BLUE='\033[0;34m'  ; WHITE='\033[1;37m'; RED='\033[0;31m'
RESET='\033[0m'

STAR='*'
C_STAR=$YELLOW

TREE=('8' '0' 'o' '@' \
    '*' '~' '-' '+' '^' '.' ',' '_' '=' '{' '}' ']' '[' ';' ':' '#' '$' '&' '!')
LIGHTS=("$YELLOW" "$BLUE" "$WHITE" "$RED")
C_TREE=$GREEN

TRUNK='#'
C_TRUNK=$ORANGE

xmastree() {
   local NLIGHTS=${#LIGHTS[@]}
   local NTREE=${#TREE[@]}

   local i j rand elem
   local W=$(( $(tput cols) / 2 ))
   local H=$(( $(tput lines) * 9 / 10 ))
   [ $H -gt $W ] && H=$W

   # buffers
   local star= tree=$C_TREE trunk=$C_TRUNK
   local str= spaces=
   for ((i=0; i<W; i++)); do
       spaces="$spaces "
   done

   # star
   star="${spaces:0:$((W-1))}$C_STAR$STAR\n"

   # tree
   for ((i=2; i<H; i++)); do
      for ((j=2; j < 2*i; j++)); do
          rand=$(( RANDOM % NTREE ))
          elem=${TREE[$rand]}
          if [ $rand -le $NLIGHTS ]
             then str="$str${LIGHTS[ $((RANDOM % NLIGHTS)) ]}$elem$C_TREE"
             else str="$str$elem"
          fi
      done
      tree="$tree${spaces:0:$((W-i))}$str\n"
      str=''
   done

   # trunk
   spaces="${spaces:0:$((W-H/4))}"
   for ((i=0; i < H/2; i++)); do
       str="$str$TRUNK"
   done
   for ((i=0; i < H/10; i++)); do
       trunk="$trunk$spaces$str\n"
   done

   printf %b "$star$tree$trunk$RESET"
}


[ "$1" = "loop" ] && exec watch --color -n -1 "$0"
xmastree "$@"
```

Now, you can run it on terminal:

```
./christmastree.sh loop
```

When you run, you will see a output like below:

![](https://raw.githubusercontent.com/isikenes/isikenes.github.io/master/assets/images/chrtreepp.png)

---
---

### [](#header-1)Writing "Hello World" in Python

You can write "Hello World" in Python with this code:

```python
print("Hello World")
```

