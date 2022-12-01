import shutil
import os
import json
from pathlib import Path

def copy_index(*args, **kwargs):
    shutil.copy("README.md", "docs/README.md")

def copy_schemas(*args, **kwargs):
    #Path("./site/schema").mkdir(parents=True, exist_ok=True)
    shutil.copytree("schema", "./site/schema", dirs_exist_ok=True)
    