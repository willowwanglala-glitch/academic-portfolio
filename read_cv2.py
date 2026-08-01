from docx import Document

doc = Document(r"E:\广工\phd\CV修改5.docx")
count = 0
for p in doc.paragraphs:
    if p.text.strip():
        print(p.text)
        count += 1
        if count >= 30:
            break
