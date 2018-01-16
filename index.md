---
layout: default
---

### [](#header-4)Writing "Hello World" in Java
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

### [](#header-3)Shell Script - Christmas Tree
Aşağıdaki kodları christmastree.sh isminde dosyaya yazdıktan sonra terminale:
```
./christmastree.sh loop
```
yazarak çalıştırabilirsiniz. Geçelim kodlara :)

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
Çalıştırdığınızda resimdeki gibi bir çıktı elde edeceksiniz.

![](https://raw.githubusercontent.com/isikenes/isikenes.github.io/master/assets/images/chrtreepp.png)

---
---

### [](#header-2)Github Dark Theme
Gerek tasarımı, gerekse gözü yormaması olsun kara temaları hep sevmişimdir. GitHub da en sık
ziyaret ettiğim sitelerin başında geliyor. Blog'umda yazıları GitHub üzerinden yazdığım için
haliyle gözüm oldukça yoruluyordu. Ben de böyle bir çözüm buldum.

*   Stylish.

Stylish, tarayıcı web mağazaları üzerinden kolayca kurabileceğiniz bir eklenti. GitHub da dahil olmak
üzere birçok web sitesi için çeşit çeşit temalar bulunduruyor. Yapmanız gereken tek şey eklentiyi
kurduktan sonra tarayıcınızın menüsünden eklentiye tıklayarak listedeki temalardan birini seçmek.
Benim oldukça hoşuma gitti. Sanırım kolay kolay kaldırmayacağım eklentilerden birisi olacak.

---
---



### [](#header-1)Python'da "Hello World" Yazma

Aşağıdaki kodlarla python üzerinden terminale "hello world" yazabilirsiniz. (Test)

```python
print("Hello World")
```

