from setuptools import setup
setup(name='microbitide',
      version='1.0',
      description='use with VS Code extension',
      author='HamiltonHuaji',
      packages=['microbitide','microbitide.flash_module','microbitide.dxk_ext'],
      install_requires=["pyserial"]
)