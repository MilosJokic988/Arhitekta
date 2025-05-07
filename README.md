
### 2. Kako postaviti `README.md` na GitHub

Ako već nisi, trebaš da postaviš svoj projekat na GitHub. Evo koraka kako to da uradiš:

1. **Kreiraj novi repozitorijum na GitHubu**:
   - Poseti [GitHub](https://github.com) i prijavi se.
   - Klikni na "+" u gornjem desnom kutu i izaberi "New repository".
   - Ispuni naziv repozitorijuma, npr. `spectroom`, i klikni na "Create repository".

2. **Poveži lokalni projekat sa GitHub repozitorijumom**:
   - U svom terminalu, idi do foldera svog projekta.
   - Inicijalizuj Git repozitorijum (ako već nisi):
     ```bash
     git init
     ```
   - Poveži repozitorijum sa GitHub-om:
     ```bash
     git remote add origin https://github.com/korisnik/spectroom.git
     ```
   - Dodaj sve promene u Git:
     ```bash
     git add .
     ```
   - Napravite commit:
     ```bash
     git commit -m "Initial commit with README"
     ```
   - Pošaljite promene na GitHub:
     ```bash
     git push -u origin master
     ```

Sada bi tvoj **`README.md`** fajl trebalo da bude postavljen na GitHub zajedno sa ostatkom projekta!

### 3. Dodatni saveti

- Ako dodaješ slike u **`README.md`**, preporučujem da ih staviš u poseban folder, npr. `images/`, i onda ih ubacuješ pomoću Markdown sintakse:
  
```markdown
![Alt text](./images/slika.png)
