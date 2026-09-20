const customTheme = {
  popover: {
    defaultProps: {
      placement: 'bottom',
      offset: 5,
      dismiss: {},
      animate: {
        unmount: {},
        mount: {},
      },
    },
    styles: {
      base: {
        mt: 'mt-[28px]',
        bg: 'bg-white',
        width: 'w-[390px]',
        height: 'h-[204px]',
        p: 'p-[20px]',
        pb: '!pb-[16px]',
        border: 'border border-blue-gray-50',
        borderRadius: 'rounded-l',
        boxShadow: 'shadow-popover',
        fontFamily: 'Pretendard',
        fontSize: 'text-sm',
        fontWeight: 'font-normal',
        color: 'text-blue-gray-500',
        outline: 'focus:outline-none',
        overflowWrap: 'break-words',
        whiteSpace: 'whitespace-normal',
      },
      overlay: {
        position: 'relative',
        inset: 'inset-0',
        width: 'w-full',
        height: 'h-full',
        pointerEvents: 'pointer-events-auto',
        zIndex: 'z-[9995]',
        backgroundColor: 'bg-black',
        backgroundOpacity: 'bg-opacity-60',
        backdropBlur: 'backdrop-blur-sm',
      },
    },
  },
  drawer: {
    defaultProps: {
      size: 300,
      overlay: true,
      placement: 'left',
      overlayProps: undefined,
      className: '',
      dismiss: undefined,
      onClose: undefined,
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
    styles: {
      base: {
        drawer: {
          position: 'fixed',
          zIndex: 'z-[9999]',
          pointerEvents: 'pointer-events-auto',
          backgroundColor: 'bg-white',
          boxSizing: 'box-border',
          width: 'w-full',
          boxShadow: 'shadow-2xl shadow-blue-gray-900/10',
          borderRadius: 'rounded-t-[20px]',
        },
        overlay: {
          position: 'absolute',
          inset: 'inset-0',
          width: 'w-full',
          height: 'h-full !h-[300vh]',
          pointerEvents: 'pointer-events-auto',
          zIndex: 'z-[9995]',
          backgroundColor: 'bg-black',
          backgroundOpacity: 'bg-opacity-60',
          backdropBlur: 'backdrop-blur-sm',
        },
      },
    },
  },

  list: {
    defaultProps: {
      ripple: true,
      className: '',
    },
    styles: {
      base: {
        list: {
          display: 'flex',
          flexDirection: 'flex-col',
          gap: 'gap-1',
          minWidth: 'min-w-[190px]',
          p: 'p-2',
          fontFamily: 'SF-Pro-Text',
          fontSize: 'text-base',
          fontWeight: 'font-normal',
          color: 'text-blue-gray-700',
        },
        item: {
          initial: {
            display: 'flex',
            alignItems: 'items-center',
            width: 'w-full',
            padding: 'p-3',
            borderRadius: 'rounded-[8px]',
            textAlign: 'text-start',
            lightHeight: 'leading-tight',
            transition: 'transition-all',
            bg: 'bg-white hover:bg-blue-gray-50 hover:bg-controlItemBgActive active:bg-blue-gray-50 active:bg-opacity-80',
            color: 'hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900',
            outline: 'outline-none',
          },
          selected: {
            bg: 'bg-controlItemBgActive',
            color: 'text-menu-colorPrimary',
          },
          disabled: {
            opacity: 'opacity-50',
            cursor: 'cursor-not-allowed',
            pointerEvents: 'pointer-events-none',
            userSelect: 'select-none',
            bg: 'hover:bg-transparent focus:bg-transparent active:bg-transparent',
            color: 'hover:text-blue-gray-500 focus:text-blue-gray-500 active:text-blue-gray-500',
          },
        },
        itemPrefix: {
          display: 'grid',
          placeItems: 'place-items-center',
          marginRight: 'mr-4',
        },
        itemSuffix: {
          display: 'grid',
          placeItems: 'place-items-center',
          marginRight: 'ml-auto justify-self-end',
        },
      },
    },
  },

  tabs: {
    defaultProps: {
      className: 'flex flex-col  min-w-[15%]',
      orientation: 'horizontal',
    },
    styles: {
      base: {
        overflow: 'overflow-hidden',
      },
      horizontal: {
        display: 'block',
      },
      vertical: {
        display: 'flex',
      },
    },
  },

  tab: {
    defaultProps: {
      className: 'margin',
      activeClassName: 'active',
      disabled: false,
    },
    styles: {
      base: {
        tab: {
          initial: {
            display: 'flex',
            alignItems: 'items-center',
            justifyContent: 'justify-center',
            textAlign: 'text-center',
            width: 'w-[100%]',
            height: 'h-[40px]',
            position: 'relative',
            bg: 'bg-transparent',
            py: 'py-[12px]',
            px: 'px-0',
            textWrap: 'whitespace-nowrap',
            color: 'text-colorTextSecondary',
            fontSmoothing: 'antialiased',
            fontFamily: 'Pretendard',
            fontSize: 'text-[20px]',
            fontWeight: 'font-semibold',
            lineHeight: 'leading-[22px]',
            userSelect: 'select-none',
            cursor: 'cursor-pointer',
            prefix: 'tw-',
          },
          disabled: {
            opacity: 'opacity-50',
            cursor: 'cursor-not-allowed',
            pointerEvents: 'pointer-events-none',
            userSelect: 'select-none',
          },
        },
        indicator: {
          position: 'absolute',
          inset: 'inset -1',
          zIndex: 'z-10',
          width: 'w-full',
          height: 'h-full',
          bg: 'bg-white',
          borderRadius: 'rounded-0',
          boxShadow: 'shadow',
        },
      },
    },
  },

  tabsHeader: {
    defaultProps: {
      className: '',
    },
    styles: {
      base: {
        display: 'flex',
        position: 'relative',
        bg: 'transparent',
        borderRadius: 'rounded-lg',
        p: 'p-0',
      },
      horizontal: {
        flexDirection: 'flex-row',
      },
      vertical: {
        flexDirection: 'flex-col',
      },
    },
  },
  tabPanel: {
    defaultProps: {
      className: '',
    },
    styles: {
      base: {
        overflow: 'auto',
        width: 'w-full',
        height: 'h-max',
        color: 'text-gray-700',
        p: 'p-4',
        fontSmoothing: 'antialiased',
        fontFamily: 'SF-Pro-Text',
        fontSize: 'text-base',
        fontWeight: 'font-light',
        lineHeight: 'leading-relaxed',
      },
    },
  },
  input: {
    defaultProps: {
      variant: 'outlined',
      // size: "md",
      color: 'gray',
      label: '',
      error: false,
      success: false,
      icon: undefined,
      labelProps: undefined,
      containerProps: undefined,
      shrink: false,
      className: '',
    },
    valid: {
      sizes: ['md', 'lg'],
      variants: ['outlined', 'text'],
      colors: ['gray'],
    },
    styles: {
      base: {
        container: {
          position: 'relative',
          width: 'w-full',
          minWidth: 'min-w-[200px]',
        },

        input: {
          peer: 'peer',
          width: 'w-full',
          height: 'h-full',
          borderRadius: 'rounded-full',
          bg: 'focus:bg-Gray/Gray1',
          color: 'text-button-colorText placeholder:[#1D1D1D] placeholder:opacity-60',
          fontFamily: 'Pretendard',
          fontWeight: 'font-normal',
          outline: 'outline outline-0 focus:outline-0',
          // disabled: "disabled:bg-blue-gray-50 disabled:border-0",
          disabled: '',
          transition: 'transition-all',
        },
      },
      variants: {
        static: {
          base: {
            container: {
              height: 'h-22',
              minHeight: 'h-22',
            },
            input: {
              height: 'h-22',
              minHeight: 'h-22',
            },
            label: {
              display: 'hidden',
            },
          },
        },
        outlined: {
          base: {
            input: {
              color: 'text-button-colorText',
              background: 'bg-input-bgContainer',
              borderWidth: 'placeholder-shown:border border  ',
              borderColor: 'border-input-borderColor placeholder-shown:border-input-borderColor ',
              floated: {
                borderWidth: '',
                borderColor: '',
              },
            },
            inputWithIcon: {
              pr: '!pr-32',
            },
            icon: {
              iconColor: 'text-input-iconColor',
              right: 'right-6',
              top: 'top-6',
              transform: '-translate-y-2/4',
            },
            label: {
              display: 'hidden',
            },
          },
          sizes: {
            md: {
              container: {
                height: 'h-44',
              },
              input: {
                fontSize: 'text-sm',
                px: 'px-20',
                py: 'py-0',

                boxSizing: 'box-border',
                borderRadius: 'rounded-full',
              },
              icon: {
                width: 'w-16',
                height: 'h-16',
              },
            },
            lg: {
              container: {
                height: 'h-40',
              },
              input: {
                fontSize: 'text-sm',
                px: 'px-20',
                py: 'py-12',
                borderRadius: 'rounded-full',
              },
              label: {
                lineHeight: 'peer-placeholder-shown:leading-[4.1]',
              },
              icon: {
                width: 'w-6',
                height: 'h-6',
              },
            },

            pc: {
              container: {
                height: 'h-44',
              },
              input: {
                fontSize: '14px',
                fontWeight: '400px',
                lineHeight: '20px',
                px: 'px-20',
                py: 'py-0',
                boxSizing: 'box-border',
                borderRadius: 'rounded-full',
              },
              icon: {
                width: 'w-16',
                height: 'h-16',
              },
            },
          },
          error: {
            input: {
              borderColor: 'border-input-error placeholder-shown:border-input-error',
              borderColorFocused: 'focus:border-input-error',
            },
            label: {
              color: 'text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500',
              before: 'before:border-input-error peer-focus:before:border-input-error',
              after: 'after:border-input-error peer-focus:after:border-input-error',
            },
          },
        },
      },
    },
  },

  button: {
    defaultProps: {
      variant: 'outlined',
      size: 'lg',
      color: 'blue',
      fullWidth: true,
      ripple: true,
    },
    valid: {
      variants: ['filled', 'outlined', 'text', 'disabled'],
      sizes: ['sm', 'md', 'lg'],
      colors: ['blue', 'primary'],
    },
    styles: {
      base: {
        initial: {
          verticalAlign: 'align-middle',
          userSelect: 'select-none',
          fontFamily: 'SF-Pro-Text',
          fontWeight: 'font-normal',
          textAlign: 'text-center',
          fontSize: 'text-16',
          transition: 'transition-all',
          disabled:
            'disabled:bg-button-colorBgContainerDisabled disabled-border-button-colorBorder disabled:text-button-colorTextDisabled disabled:shadow-none disabled:pointer-events-none',

          cursor: 'cursor-pointer',
        },
        fullWidth: {
          display: 'block',
          width: 'w-auto',
        },
      },
      sizes: {
        sm: {
          fontSize: '!text-14',
          px: 'px-14',
          height: 'h-24',
          width: 'w-24',
          borderRadius: 'rounded-m',
          fontWeight: 'font-normal',
          lineHeight: 'leading-[21px]',
        },

        md: {
          fontSize: '!text-14',
          px: 'px-16',
          height: 'h-48',
          borderRadius: 'rounded-l',
          fontWeight: 'font-normal',
          lineHeight: 'leading-[21px]',
        },
        lg: {
          height: 'h-40',
          px: 'px-16',
          borderRadius: 'rounded-l',
          fontWeight: 'font-normal',
          lineHeight: 'leading-[23px]',
          fontSize: '!text-16',
        },
      },
      variants: {
        filled: {
          blue: {
            border: 'border-0 disabled:border disabled:border-solid   ',

            backgroud: 'bg-button-colorPrimary',
            color: 'text-white',
            shadow: 'shadow-none',
            hover: 'hover:opacity-[0.75] hover:shadow-none',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          red: {
            border: 'border-0',
            backgroud: 'bg-button-colorError',
            color: 'text-white',
            shadow: 'shadow-none',
            hover: 'hover:shadow-none hover:shadow-none',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
        },
        disabled: {
          blue: {
            border: 'border  border-button-colorBorder ',
            backgroud: 'bg-button-colorBgContainerDisabled',
            color: 'text-button-colorTextDisabled',
            shadow: 'shadow-none',
            hover: 'hover:shadow-none',
            focus: 'focus:shadow-none',
            active: 'active:shadow-none',
          },
          red: {
            border: 'border  border-button-colorBorder ',
            backgroud: 'bg-button-colorBgContainerDisabled',
            color: 'text-button-colorTextDisabled',
            shadow: 'shadow-none',
            hover: 'hover:shadow-none',
            focus: 'focus:shadow-none',
            active: 'active:shadow-none',
          },
        },
        outlined: {
          blue: {
            fontSize: '!text-14',
            px: 'px-14',
            border: 'border  border-button-colorBorder ',
            color: 'text-colorTextLightSolid',
            hover: 'hover:opacity-95',
            focus: 'focus:ring focus:ring-blue-200',
            active: 'active:opacity-[0.85]',
            background: 'bg-white disabled:bg-white',
            borderRadius: 'rounded-l',
          },
        },
        text: {
          border: 'border-0',
          background: 'bg-colorTransparent',
          color: 'text-button-colorText ',
          hover: 'hover:bg-colorTransparent',
          active: 'active:bg-colorTransparent',
        },
      },
    },
  },
  typography: {
    defaultProps: {
      variant: 'paragraph',
      color: 'black',
      textGradient: false,
      className: '',
    },
    valid: {
      variants: [
        'lhHeading5',
        'lhHeading4',
        // "lhHeading4", "title", "normal", "strong", "SMNormal"
      ],
      colors: ['black', 'primary', 'white', 'red', 'dark', 'error'],
    },
    styles: {
      variants: {
        lhHeading5: {
          display: 'block',
          fontSmoothing: 'antialiased',
          letterSpacing: 'tracking-normal',
          fontFamily: 'SF-Pro-Text',
          fontWeight: 'font-bold',
          lineHeight: 'leading-28',
          fontSize: 'text-[20px]',
          margin: 'm-0',
        },
        lhHeading4: {
          display: 'block',
          fontSmoothing: 'antialiased',
          letterSpacing: 'tracking-normal',
          fontFamily: 'SF-Pro-Text',
          fontWeight: 'font-bold',
          lineHeight: 'leading-28',
          fontSize: 'text-[20px]',
          margin: 'm-0',
        },
      },

      colors: {
        black: {
          color: 'text-black',
        },
        white: {
          color: 'text-white',
        },

        primary: {
          color: 'text-colorPrimaryBase',
        },
        dark: {
          color: 'text-colorTextDescription',
        },
        error: {
          color: 'text-colorErrorBase',
        },
      },
    },
  },
  spinner: {
    defaultProps: {
      color: 'primary',
      textGradient: false,
      className: '',
    },
    valid: {
      colors: ['black', 'primary', 'white', 'red'],
    },
    styles: {
      sizes: {
        width: 'w-16',
        height: 'h-16',
      },

      colors: {
        black: {
          color: 'text-black',
        },
        white: {
          color: 'text-white',
        },

        primary: {
          color: 'text-colorPrimaryBase',
        },
      },
    },
  },

  dialog: {
    defaultProps: {
      size: 'md',
      dismiss: {},
      animate: {
        unmount: {},
        mount: {},
      },
      className: '',
    },
    valid: {
      sizes: ['md', 'lg'],
    },
    styles: {
      base: {
        backdrop: {
          display: 'grid',
          placeItems: 'place-items-center',
          position: 'fixed',
          top: 0,
          left: 0,
          width: 'w-screen',
          height: 'h-screen',
          backgroundColor: 'bg-black',
          backgroundOpacity: 'bg-opacity-60',
          backdropFilter: 'backdrop-blur-sm',
        },
        container: {
          position: 'relative',
          bg: 'bg-white',
          m: 'm-4',
          borderRadius: 'rounded-lg',
          boxShadow: 'shadow-2xl',
          color: 'text-blue-gray-500',
          fontSmoothing: 'antialiased',
          fontFamily: 'SF-Pro-Text',
          fontSize: 'text-base',
          fontWeight: 'font-light',
          lineHeight: 'leading-relaxed',
          width: 'w-480',
        },
      },
      sizes: {
        md: {
          width: '!w-480',
          minWidth: '!min-w-480',
          maxWidth: '!max-w-480',
        },
        lg: {
          width: 'w-full md:w-5/6 lg:w-3/4 2xl:w-3/5',
          minWidth: 'min-w-[90%] md:min-w-[83.333333%] lg:min-w-[75%] 2xl:min-w-[60%]',
          maxWidth: 'max-w-[90%] md:max-w-[83.333333%] lg:max-w-[75%] 2xl:max-w-[60%]',
        },
      },
    },
  },
  select: {
    defaultProps: {
      variant: 'outlined',
      color: 'gray',
      size: 'lg',
      label: '',
      error: false,
      success: false,
      arrow: undefined,
      value: undefined,
      onChange: undefined,
      selected: undefined,
      offset: 5,
      dismiss: {},
      animate: {
        unmount: {},
        mount: {},
      },
      autoHeight: false,
      lockScroll: false,
      labelProps: {},
      menuProps: {},
      className: '',
      disabled: false,
      containerProps: undefined,
    },
    valid: {
      variants: ['standard', 'outlined', 'static'],
      sizes: ['md', 'lg'],
      colors: ['blue-gray', 'gray'],
    },
    styles: {
      base: {
        container: {
          position: 'relative',
          width: 'w-full',
          minWidth: 'min-w-[200px]',
          height: 'h-[48px]',
        },
        select: {
          peer: 'peer',
          width: 'w-full',
          height: 'h-full',
          display: 'flex',
          bg: 'bg-transparent',
          color: 'text-colorTextSecondary',
          fontFamily: 'font-sans',
          fontWeight: 'font-normal',
          textAlign: 'text-left',
          outline: 'outline outline-0 focus:outline-0',
          disabled: 'disabled:bg-blue-gray-50 disabled:border-0',
          transition: 'transition-all',
          border: 'border-1 border-gray4',
          borderTop: '!border-t-1 !border-gray4',
          span: '',
        },
        span: {
          left: '!hidden !left-[10px]',
        },
        arrow: {
          initial: {
            display: 'grid',
            placeItems: 'place-items-center',
            position: 'absolute',
            top: 'top-2/4',
            right: 'right-5',
            pt: 'pt-px',
            width: 'w-16',
            height: 'h-16',
            color: 'text-colorTextSecondary',
            transform: 'rotate-0 -translate-y-1/4',
            transition: 'transition-all',
          },
          active: {
            transform: 'rotate-180',
            mt: 'mt-px',
          },
        },
        label: {
          display: 'hidden',
        },
        menu: {
          width: 'w-full',
          maxHeight: 'max-h-96',
          bg: 'bg-white',
          p: 'p-3',
          border: 'border border-blue-gray-50',
          borderRadius: 'rounded-l',
          boxShadow: 'shadow-lg shadow-blue-gray-500/10',
          fontFamily: 'font-Pretendard',
          fontSize: 'text-sm',
          fontWeight: 'font-normal',
          color: 'text-blue-gray-500',
          overflow: 'overflow-auto',
          outline: 'focus:outline-none',
        },
        option: {
          initial: {
            pt: 'pt-[15px]',
            pb: 'pb-[15px]',
            px: 'px-[15px]',
            height: '!h-[44px]',
            borderRadius: 'rounded-l',
            lightHeight: 'leading-tight',
            cursor: 'cursor-pointer',
            userSelect: 'select-none',
            background: 'hover:bg-blue-gray-50 focus:bg-blue-gray-50',
            opacity: 'hover:bg-opacity-80 focus:bg-opacity-80',
            color: 'text-Gray/Gray6 hover:text-blue-gray-900 focus:text-blue-gray-900',
            outline: 'outline outline-0',
            transition: 'transition-all',
          },
          active: {
            bg: '',
            color: 'text-Primary/Primary6',
          },
          disabled: {
            opacity: 'opacity-50',
            cursor: 'cursor-not-allowed',
            userSelect: 'select-none',
            pointerEvents: 'pointer-events-none',
          },
        },
      },
      variants: {
        outlined: {
          base: {
            select: {},
          },
          sizes: {
            md: {
              container: {
                height: 'h-10',
              },
              select: {
                fontSize: 'text-sm',
                px: 'px-3',
                py: 'py-2.5',
                borderRadius: 'rounded-l',
              },
            },
            lg: {
              container: {
                height: 'h-11',
              },
              select: {
                fontSize: 'text-sm',
                px: 'px-3',
                py: 'py-3',
                borderRadius: 'rounded-l',
              },
            },
          },
          colors: {
            select: {
              gray: {
                close: {
                  borderColor: 'border-gray4',
                },
                open: {
                  borderColor: 'border-gray4',
                },
                withValue: {
                  borderColor: 'border-gray4',
                },
              },
            },
          },
          states: {
            close: {
              select: {
                borderWidth: 'border',
              },
            },
            open: {
              select: {
                borderWidth: 'border-2',
              },
            },
            withValue: {
              select: {
                borderWidth: 'border',
              },
            },
          },
          error: {
            select: {
              initial: {},
              states: {
                close: {
                  borderColor: 'border-red-500',
                },
                open: {
                  borderColor: 'border-red-500',
                },
                withValue: {
                  borderColor: 'border-red-500',
                },
              },
            },
          },
          success: {
            select: {
              initial: {},
              states: {
                close: {
                  borderColor: 'border-green-500',
                },
                open: {
                  borderColor: 'border-green-500',
                },
                withValue: {
                  borderColor: 'border-green-500',
                },
              },
            },
          },
        },
        standard: {
          base: {
            select: {},
          },
          sizes: {
            md: {
              container: {
                height: 'h-11',
              },
              select: {
                fontSize: 'text-sm',
                pt: 'pt-4',
                pb: 'pb-1.5',
              },
            },
            lg: {
              container: {
                height: 'h-12',
              },
              select: {
                fontSize: 'text-sm',
                px: 'px-px',
                pt: 'pt-5',
                pb: 'pb-2',
              },
            },
          },
          colors: {
            select: {
              gray: {
                close: {
                  borderColor: 'border-gray4',
                },
                open: {
                  borderColor: 'border-gray4',
                },
                withValue: {
                  borderColor: 'border-gray4',
                },
              },
            },
          },
          states: {
            close: {
              select: {
                borderWidth: 'border-b',
              },
              label: {
                fontSize: 'text-sm',
                disabled: 'peer-disabled:text-blue-gray-400',
                after: {
                  transform: 'after:scale-x-0',
                },
              },
            },
            open: {
              select: {
                borderWidth: 'border-b',
              },
            },
            withValue: {
              select: {
                borderWidth: 'border-b',
              },
            },
          },
          error: {
            select: {
              initial: {},
              states: {
                close: {
                  borderColor: 'border-red-500',
                },
                open: {
                  borderColor: 'border-red-500',
                },
                withValue: {
                  borderColor: 'border-red-500',
                },
              },
            },
          },
          success: {
            select: {
              initial: {},
              states: {
                close: {
                  borderColor: 'border-gray4',
                },
                open: {
                  borderColor: 'border-gray4',
                },
                withValue: {
                  borderColor: 'border-gray4',
                },
              },
            },
            label: {
              initial: {},
              states: {
                close: {
                  color: 'text-gray4',
                  after: 'after:border-gray4',
                },
                open: {
                  color: 'text-gray4',
                  after: 'after:border-gray4',
                },
                withValue: {
                  color: 'text-gray4',
                  after: 'after:border-gray4',
                },
              },
            },
          },
        },
        static: {
          base: {
            select: {},
          },
          sizes: {
            md: {
              container: {
                height: 'h-11',
              },
              select: {
                fontSize: 'text-sm',
                pt: 'pt-4',
                pb: 'pb-1.5',
              },
            },
            lg: {
              container: {
                height: 'h-12',
              },
              select: {
                fontSize: 'text-sm',
                px: 'px-px',
                pt: 'pt-5',
                pb: 'pb-2',
              },
            },
          },
          colors: {
            select: {
              gray: {
                close: {
                  borderColor: 'border-gray4',
                },
                open: {
                  borderColor: 'border-gray4',
                },
                withValue: {
                  borderColor: 'border-gray4',
                },
              },
            },
          },
          states: {
            close: {
              select: {
                borderWidth: 'border-b',
              },
            },
            open: {
              select: {
                borderWidth: 'border-b',
              },
            },
            withValue: {
              select: {
                borderWidth: 'border-b',
              },
            },
          },
          error: {
            select: {
              initial: {},
              states: {
                close: {
                  borderColor: 'border-red-500',
                },
                open: {
                  borderColor: 'border-red-500',
                },
                withValue: {
                  borderColor: 'border-red-500',
                },
              },
            },
          },
          success: {
            select: {
              initial: {},
              states: {
                close: {
                  borderColor: 'border-green-500',
                },
                open: {
                  borderColor: 'border-green-500',
                },
                withValue: {
                  borderColor: 'border-green-500',
                },
              },
            },
          },
        },
      },
    },
  },
  card: {
    defaultProps: {
      variant: 'filled',
      color: 'white',
      shadow: false,
      className: '',
    },
    valid: {
      variants: ['filled', 'gradient'],
      colors: ['transparent', 'white'],
    },
    styles: {
      base: {
        initial: {
          position: 'relative',
          display: 'block',
          backgroundClip: 'bg-clip-border',
          borderRadius: '',
        },
      },
    },
  },
  cardHeader: {
    defaultProps: {
      variant: 'filled',
      color: 'white',
      shadow: false,
      floated: true,
      className: '',
    },
    valid: {
      variants: ['filled', 'gradient'],
      colors: ['transparent', 'white'],
    },
    styles: {
      base: {
        initial: {
          position: 'relative',
          backgroundClip: 'bg-clip-border',
          mt: 'mt-0',
          mx: 'mx-0',
          borderRadius: 'rounded-l',
          overflow: 'overflow-hidden',
        },
        shadow: {
          boxShadow: '',
        },
        floated: {
          mt: 'mt-0',
        },
      },
      variants: {
        filled: {
          transparent: {
            backgroud: 'bg-transparent',
            color: 'text-gray-700',
            shadow: 'shadow-none',
          },
          white: {
            backgroud: 'bg-white',
            color: 'text-gray-700',
          },
        },
      },
    },
  },
  chip: {
    defaultProps: {
      variant: 'filled',
      size: 'md',
      color: 'blue',
      icon: undefined,
      open: true,
      onClose: undefined,
      action: undefined,
      animate: {
        unmount: {},
        mount: {},
      },
      className: '',
    },
    valid: {
      variants: ['filled'],
      sizes: ['sm', 'md'],
      colors: ['blue', 'purple'],
    },
    styles: {
      base: {
        chip: {
          position: 'relative',
          display: 'grid',
          placeItems: 'items-center',
          fontFamily: 'font-sans',
          fontSize: 'text-10',
          fontWeight: 'font-medium',
          textTransform: 'uppercase',
          lineHeight: 'leading-none',
          whiteSpace: 'whitespace-nowrap',
          userSelect: 'select-none',
        },
        action: {
          position: '!absolute',
          top: 'top-2/4',
          right: 'right-1',
          translate: '-translate-y-2/4',
          mx: 'mx-px',
          rounded: 'rounded-md',
        },
        icon: {
          position: 'absolute',
          top: 'top-2/4',
          translate: '-translate-y-2/4',
        },
      },
      sizes: {
        sm: {
          chip: {
            py: 'py-4',
            px: 'px-8',
            fontSize: 'text-[10px]',
            fontWeight: 'font-medium ',
            lineHeight: 'leading-[10px]',
            textAlign: 'text-center',
            color: 'text-white',
            borderRadius: 'rounded-br-l rounded-tl-l',
          },
          action: {
            width: 'w-5',
            height: 'h-5',
          },
          icon: {
            width: 'w-5',
            height: 'h-5',
            left: 'left-1.5',
          },
        },
        md: {
          chip: {
            py: 'py-4',
            px: 'px-8',
            width: 'w-[76px]',
            height: 'h-[40px]',
            fontSize: 'text-[20px]',
            weight: 'font-bold',
            align: 'text-center',
            color: 'text-white',
            borderRadius: 'rounded-l',
          },
          action: {
            width: 'w-5',
            height: 'h-5',
          },
          icon: {
            width: 'w-5',
            height: 'h-5',
            left: 'left-1.5',
          },
        },
      },
      variants: {
        filled: {
          blue: {
            backgroud: 'bg-blue4',
            color: 'text-white',
          },
          purple: {
            backgroud: 'bg-purple4',
            color: 'text-white',
          },
        },
      },
    },
  },
};

export default customTheme;
