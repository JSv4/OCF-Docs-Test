import shutil

def copy_index(*args, **kwargs):
    shutil.copy("README.md", "docs/README.md")

def copy_schemas(*args, **kwargs):
    shutil.copytree("schema", "docs/json_schemas", dirs_exist_ok=True)
